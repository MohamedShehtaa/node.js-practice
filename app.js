const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRouter = require('./routes/shop')
const errorController = require('./controllers/error');

const sequelize = require('./util/database')  // use it here to turn all models to a tables

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public' )))  // for handle static files 

// the order here does not matter cuze the router handle this with method and the path if matched 

app.use('/admin',adminRoutes)   
app.use(shopRouter)

// add 404 page in case un an handled requests  
app.use(errorController.get404)

sequelize.sync().then(res =>console.log(res)).catch(err => console.log(err)) // it syncs your models to db tables


const port = 3000

app.listen(port,(error) =>{ console.log(`running on  http://localhost:${port}/ `)})