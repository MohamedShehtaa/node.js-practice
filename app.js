const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRouter = require('./routes/shop')
const errorController = require('./controllers/error');

const sequelize = require('./util/database')  // use it here to turn all models to a tables

const Product = require('./models/product')
const User = require('./models/user')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public' )))  // for handle static files 

// the order here does not matter cuze the router handle this with method and the path if matched 
app.use((req,res,next) => {
    User.findOne({where:{id:1}})
    .then(user => {
        // console.log(user)
        req.user = user  // here we add user sequelize db object to the incoming request to be available to entire app 
        next()
    })
    .catch(err=>console.log(err))

})
app.use('/admin',adminRoutes)   
app.use(shopRouter)

// add 404 page in case un an handled requests  
app.use(errorController.get404)

Product.belongsTo(User,{constraints:true, onDelete: 'CASCADE' }/* how this relation can be mange */) // here user create the product
User.hasMany(Product) // one user can add more one product to a shop == belongTo


sequelize
        //  .sync({force:true}/* here to overwrite the table on db to add two tables and their relation  not use in production */ )
         .sync()
         .then(res =>{
            return User.findOne({ where: { id: 1 } })   // here we need to make a dummy user to use it in our app for now like the authentication
            
            //console.log(res)
         })
         .then(user => {
            if(!user) {
               return User.create({
                    name:'max',
                    email:'test@test.com',
                })
            }
            return user
         })
         .then(user=> {
            // app.listen(3000)
            const port = 3000
            app.listen(port,(error) =>{ console.log(`running on  http://localhost:${port}/ `)})
            // console.log(user)
        })
         .catch(err => console.log(err)) // it syncs your models to db tables


