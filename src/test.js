import {ProductController} from './controllers/product-controller.js'

const products = await ProductController.getAll()
const productId = await ProductController.getById(4)
console.log(productId)