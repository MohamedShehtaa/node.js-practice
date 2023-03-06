const http = require ('http')
const express = require('express')

const app = express()

app.use((req,res,next) => {
    console.log("from moddleware no 1")
    next() // allow the req to move to next middleware
})

app.use((req,res,next) => {
    console.log("from moddleware no 2 ")
    res.send('<h3>hello from express </h3>')
})

const port = 3000

app.listen(port,(error) =>{ console.log(`running in port ${port}`)})