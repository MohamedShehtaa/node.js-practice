
const path = require('path') 
const express = require('express')

const productsController =require ('../controllers/products')

const router = express.Router()

//reachable '/admin/add-product' ==> get
router.get('/add-product',productsController.getAddProduct)  // not call the fun here => the router store the func then every req the router will execute this func

//reachable '/admin/add-product' ==> post
router.post('/add-product',productsController.postAddProduct)
module.exports = router
