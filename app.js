const express = require('express')
const bodyParser = require('body-parser')


const app = express()

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}))

// the order here does not matter cuze the router handle this with method and the path if matched 

app.use(adminRouter)   
app.use(shopRouter)


const port = 3000

app.listen(port,(error) =>{ console.log(`running on  http://localhost:${port}/ `)})