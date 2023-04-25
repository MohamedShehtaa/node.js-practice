const fs = require('fs')
const path = require('path')

const rootPath = require('../util/path')

const cartPath = path.join(rootPath, 'data','cart.json')

module.exports = class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(cartPath,(err,fileContent) => {
            let cart = { products:[] , totalPrice:0} 
            if(!err) { 
                cart = JSON.parse(fileContent)
            }

            const existingProductIndex=cart.products.findIndex(p => p.id ===id)
            const existingProduct = cart.products[existingProductIndex]
            let updatingProduct;
            if (existingProduct) {
                updatingProduct = {...existingProduct , qty: existingProduct.qty + 1}
                cart.products[existingProductIndex] = updatingProduct
            }else {
                updatingProduct = { id, qty:1  }
                cart.products = [...cart.products, updatingProduct]
            }
            cart.totalPrice = +cart.totalPrice + Number(productPrice)
            fs.writeFile(cartPath, JSON.stringify(cart), err => console.log(err))
        })
    }
}