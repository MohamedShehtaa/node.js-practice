const http = require ('http')
const express = require('express')

const app = express()

app.use((req,res,next) => {
    console.log("from moddleware no 1")
    next() // allow the req to move to next middleware
})

app.use((req,res,next) => {
    console.log("from moddleware no 2 ")
})

const server =http.createServer (app)
const port = 3000

server.listen(port,(error) =>{ console.log(`running in port ${port}`)})