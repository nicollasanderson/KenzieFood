import {ProductController} from '../controllers/product-controller.js'
import {VitriniModel} from '../models/product-model.js'

const lista = await ProductController.getAll()
VitriniModel.renderProduct(lista)

const containerPrincipal = document.querySelector('.float')
const searchInput = document.getElementById('searchInput')
const divSum = document.querySelector('.hidden')


class CarrinhoCompras{
    static arr = []

    static addCart(event){
        if(event.target.tagName === 'BUTTON' && event.target.className !== 'remover'){
            
            const liParent = event.target.parentNode.parentNode
            const name = liParent.querySelector('h3').innerText
            const produtoFiltrado = lista.find(element=> element.nome === name)
            
            CarrinhoCompras.arr.push(produtoFiltrado)

            const storage = CarrinhoCompras.arr.map(element=>JSON.stringify(element))

            localStorage.setItem('carrinho',CarrinhoCompras.arr)

            VitriniModel.renderProductCart(CarrinhoCompras.arr)
            CarrinhoCompras.sumProducts(CarrinhoCompras.arr)
            
            if(CarrinhoCompras.arr.length>0){
                
                divSum.classList.remove('hidden')
            }
            
        }else if(event.target.tagName === 'BUTTON' && event.target.className === 'remover'){

            const liParent = event.target.parentNode
            const name = liParent.querySelector('h3').innerText
            
            CarrinhoCompras.arr = CarrinhoCompras.arr.filter(element=>element.nome !== name)

            VitriniModel.renderProductCart(CarrinhoCompras.arr)

            CarrinhoCompras.sumProducts(CarrinhoCompras.arr)

            if(CarrinhoCompras.arr.length==0){
                divSum.classList.add('hidden')
            }
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

    static sumProducts(arrProducts){
        let total = 0
        arrProducts.forEach(element=>{
            total += element.preco
        })
        let qntItems = arrProducts.length

        const pQnt = document.getElementById('quantidade')
        const pSum = document.getElementById('sumTotal')

        pQnt.innerText = qntItems
        pSum.innerText = total
        
    }

}



searchInput.addEventListener('input',function(){
    CarrinhoCompras.findSearch(searchInput.value)
})
containerPrincipal.addEventListener('click',CarrinhoCompras.addCart,false)