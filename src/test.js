const ProductController = require('./controllers/product-controller')

const products = ProductController.getAll()
console.log(products)