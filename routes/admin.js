
const path = require('path') 
const express = require('express')
const rootDir = require('../util/path')

const router = express.Router()

//reachable '/admin/add-product' ==> get
router.get('/add-product',(req,res,next) => {
    //__dirname: location of current file , then ../views/add-product.html

    //rootDir=== __dirname,'../' === __dirname,'..'
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})

//reachable '/admin/add-product' ==> post
router.post('/add-product',(req,res,next) => {
    
    res.redirect('/')

})


module.exports = router