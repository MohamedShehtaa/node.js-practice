// single product not products cuze the my app core is product 
// so i want here to describe the structure of this product 
const products = []
module.exports = class Product {
    constructor(t) {
        this.title = t
    }

    save() {
        products.push(this)
    }

    static fetchAll(){
        return products
    }
}