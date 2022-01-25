import {ProductController} from '../controllers/product-controller.js'
import {VitriniModel} from '../models/product-model.js'

const lista = await ProductController.getAll()
VitriniModel.renderProduct(lista)
const botoes = document.querySelectorAll('.botaoCarrinho')

class CarrinhoCompras{
    static arr = []

    static addCart(){
        VitriniModel.renderProductCart(this.parentNode)
        
    }

}

botoes.forEach(element=>{
    element.addEventListener('click',CarrinhoCompras.addCart)
})