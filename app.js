const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use('/',(req,res,next) => { //default
    // console.log("from moddleware no 1")
    next() // allow the req to move to next middleware
})
app.use('/add-product',(req,res,next) => {
    res.send('<form action="/product" method="POST"> <input type="text" name="title" > <button type="submit" >add product </button></form>')
})
app.get('/product',(req,res,next) => {
    console.log(req.body.title)
    res.redirect('/')
})

app.use('/',(req,res,next) => {
    // console.log("from moddleware no 2 ")
    res.send('<h3>hello from express </h3>')
})

const port = 3000

app.listen(port,(error) =>{ console.log(`running on  http://localhost:${port}/ `)})