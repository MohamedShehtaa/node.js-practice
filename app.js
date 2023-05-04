const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRouter = require('./routes/shop')
const errorController = require('./controllers/error');

const db = require('./util/database')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

db.execute('SELECT * FROM products').then((data)=>console.log(data[0])).catch((err) => console.log(err))

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public' )))  // for handle static files 

// the order here does not matter cuze the router handle this with method and the path if matched 

app.use('/admin',adminRoutes)   
app.use(shopRouter)

// add 404 page in case un an handled requests  
app.use(errorController.get404)


const port = 3000

app.listen(port,(error) =>{ console.log(`running on  http://localhost:${port}/ `)})