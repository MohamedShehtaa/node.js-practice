const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')


const app = express()

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}))

// the order here does not matter cuze the router handle this with method and the path if matched 

app.use('/admin',adminRouter)   
app.use('/shop',shopRouter)
// add 404 page in case un an handled requests  
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','not-found.html'))
})


const port = 3000

app.listen(port,(error) =>{ console.log(`running on  http://localhost:${port}/ `)})