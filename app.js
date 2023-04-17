const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const adminData = require('./routes/admin')
const shopRouter = require('./routes/shop')

const app = express()


app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public' )))  // for handle static files 

// the order here does not matter cuze the router handle this with method and the path if matched 

app.use('/admin',adminData.router)   
app.use(shopRouter)
// add 404 page in case un an handled requests  
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','not-found.html'))
})


const port = 3000

app.listen(port,(error) =>{ console.log(`running on  http://localhost:${port}/ `)})