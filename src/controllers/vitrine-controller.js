import {ProductController} from '../controllers/product-controller.js'
import {VitriniModel} from '../models/product-model.js'

const lista = await ProductController.getAll()
VitriniModel.renderProduct(lista)

const containerPrincipal = document.querySelector('.float')
let searchInput = document.getElementById('searchInput')
let total = 0

class CarrinhoCompras{
    static arr = []

    static addCart(event){
        if(event.target.tagName === 'BUTTON' && event.target.className !== 'remover'){
            
            const liParent = event.target.parentNode.parentNode
            const name = liParent.querySelector('h3').innerText
            const produtoFiltrado = lista.find(element=> element.nome === name)

            total += parseFloat(produtoFiltrado.preco)
            console.log(total);
            CarrinhoCompras.arr.push(produtoFiltrado)
            const storage = CarrinhoCompras.arr.map(element=>JSON.stringify(element))

            localStorage.setItem('carrinho',CarrinhoCompras.arr)
            console.log(localStorage.getItem('carrinho'))

            VitriniModel.renderProductCart(CarrinhoCompras.arr)
            
        }else if(event.target.tagName === 'BUTTON' && event.target.className === 'remover'){

            const liParent = event.target.parentNode
            const name = liParent.querySelector('h3').innerText
            
            CarrinhoCompras.arr = CarrinhoCompras.arr.filter(element=>element.nome !== name)

            VitriniModel.renderProductCart(CarrinhoCompras.arr)

        }
    }

    static async findSearch(search){
        let product = await ProductController.filterProductByName(search)
        let categoria = await ProductController.filterProductByCategory(search)
        if(product.length === 0){
            VitriniModel.renderProduct(categoria)
        }else{
            VitriniModel.renderProduct(product)
        }
        
    }

}

searchInput.addEventListener('input',function(){
    CarrinhoCompras.findSearch(searchInput.value)
})
containerPrincipal.addEventListener('click',CarrinhoCompras.addCart)