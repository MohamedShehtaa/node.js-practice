// single product not products cuze the my app core is product 
// so i want here to describe the structure of this product 
const fs = require('fs')
const path = require('path')

const rootPath = require('../util/path')

module.exports = class Product {
    constructor(t) {
        this.title = t
    }

    save() {
        const productPath = path.join(rootPath, 'data','products.json')
        fs.readFile(productPath,(err,fileContent) => {
            let products =[]
            if(!err) {
                products = JSON.parse(fileContent)
            }
            products.push(this)
            fs.writeFile(productPath,JSON.stringify(products),(err)=> console.log(err))
        })
    }

    static fetchAll(cb){
        const productPath = path.join(rootPath, 'data','products.json')
        fs.readFile(productPath,(err,fileContent) => {
            if(err) {
                cd([])
            }
            cb(JSON.parse(fileContent))
      
    })
   }
}