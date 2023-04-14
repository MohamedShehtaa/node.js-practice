const express = require('express')

const router = express.Router()

//reachable '/admin/add-product' ==> get
router.get('/add-product',(req,res,next) => {
    res.send('<form action="/admin/add-product" method="POST"> <input type="text" name="title" > <button type="submit" >add product </button></form>')
})

//reachable '/admin/add-product' ==> post
router.post('/add-product',(req,res,next) => {
    
    res.redirect('/')

})


module.exports = router