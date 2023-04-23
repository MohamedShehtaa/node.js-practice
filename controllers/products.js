const products = []  // this is not the perfect solution cuze => i share the data a cross all the users , i want share the data with one user (his data)


exports.getAddProduct = (req,res,next) => {
    res.render('add-product',{
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
  })
}

exports.postAddProduct = (req,res,next) => {
    products.push({title:req.body.title})
    res.redirect('/')
}

exports.getProducts = (req,res,next) => {
   res.render('shop',  {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  })
}