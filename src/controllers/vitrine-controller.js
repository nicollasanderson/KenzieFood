import {ProductController} from '../controllers/product-controller.js'
import {VitriniModel} from '../models/product-model.js'

const lista = await ProductController.getAll()
VitriniModel.renderProduct(lista)