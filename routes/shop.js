const path = require('path')
const express = require('express')
const rootDir = require('../util/path')

const adminData =require('./admin')

const router = express.Router()

router.get('/',(req,res,next) => {
    // path.join will Join all arguments together and normalize the resulting path.  why join cuze will create path works on linux and windows systems
    // - first params is dirname => refer to the folder of this file
    // - second params is the folder you need to reach 
    // - 3 params is the file name so on ... 
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'))  // method to send file to the client , it should be the absolute path
    const products = adminData.products
    res.render('shop',{prods:products, docTitle:'Shop'})
})

module.exports = router