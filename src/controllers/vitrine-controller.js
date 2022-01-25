import {ProductController} from '../controllers/product-controller.js'
import {VitriniModel} from '../models/product-model.js'

const lista = await ProductController.getAll()
VitriniModel.renderProduct(lista)

const botoes = document.querySelectorAll('.botaoCarrinho')
const containerPrincipal = document.querySelector('.float')

class CarrinhoCompras{
    static arr = []

    static verifyEvent(event){
        if(event.target.tagName === 'BUTTON' && event.target.className !== 'remover'){
            
            const liParent = event.target.parentNode.parentNode
            const name = liParent.querySelector('h3').innerText
            const produtoFiltrado = lista.find(element=> element.nome === name)

            CarrinhoCompras.arr.push(produtoFiltrado)
            const storage = CarrinhoCompras.arr.map(element=>JSON.stringify(element))

            localStorage.setItem('carrinho',CarrinhoCompras.arr)
            console.log(localStorage.getItem('carrinho'))
            
            
            console.log(storage);

            VitriniModel.renderProductCart(CarrinhoCompras.arr)
            
        }else if(event.target.tagName === 'BUTTON' && event.target.className === 'remover'){

            const liParent = event.target.parentNode
            const name = liParent.querySelector('h3').innerText

            CarrinhoCompras.arr = CarrinhoCompras.arr.filter(element=>element.nome !== name)

            VitriniModel.renderProductCart(CarrinhoCompras.arr)

        }
    }

}

containerPrincipal.addEventListener('click',CarrinhoCompras.verifyEvent)