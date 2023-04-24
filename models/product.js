// single product not products cuze the my app core is product 
// so i want here to describe the structure of this product 
const fs = require('fs')
const path = require('path')

const rootPath = require('../util/path')

const productPath = path.join(rootPath, 'data','products.json')
const getProductsFromFile = (cb) => {
    fs.readFile(productPath,(err,fileContent) => {
            if(err)  cd([])
            else cb(JSON.parse(fileContent))
    })
}

module.exports = class Product {
   constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

    save() {
        this.id = Math.random().toString()
        getProductsFromFile(products => {
            products.push(this)
            fs.writeFile(productPath,JSON.stringify(products),(err)=> console.log(err))
        })
    }

    static fetchAll(cb){
        getProductsFromFile(cb)
   }

   static findById ( id, cb ) {
        getProductsFromFile(products => {
            const product = products.find(p=> p.id === id)
            cb(product)
        })

   }
}