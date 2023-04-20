
const path = require('path') 
const express = require('express')
const rootDir = require('../util/path')

const router = express.Router()
const products = []  // this is not the perfect solution cuze => i share the data a cross all the users , i want share the data with one user (his data)

//reachable '/admin/add-product' ==> get
router.get('/add-product',(req,res,next) => {
    //__dirname: location of current file , then ../views/add-product.html
    //rootDir=== __dirname,'../' === __dirname,'..'
    // res.sendFile(path.join(rootDir,'views','add-product.html'))
     res.render('add-product',{
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  })
})

//reachable '/admin/add-product' ==> post
router.post('/add-product',(req,res,next) => {
    products.push({title:req.body.title})
    res.redirect('/')

})


exports.router = router
exports.products = products