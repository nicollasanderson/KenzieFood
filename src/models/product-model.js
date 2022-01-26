class VitriniModel{
    static renderProduct(arrProdutcs){
        console.log(arrProdutcs);
        arrProdutcs.forEach(element=>{
            const ulMain = document.querySelector('.listaProdutos')
            const li = document.createElement('li')
            const img = document.createElement('img')
            const h3 = document.createElement('h3')
            const span = document.createElement('span')
            const pDesc = document.createElement('p')
            const divCompra = document.createElement('div')
            const pPrice = document.createElement('p')
            const button = document.createElement('button')
            const imgCart = document.createElement("img")
            
            img.src = element.imagem
            img.alt = element.nome
            span.innerText = element.categoria
            h3.innerText = element.nome
            pDesc.innerText = element.descricao
            pPrice.innerText = `R$ ${element.preco}`
            imgCart.src = "src/imgs/shopping-cart_1f6d2.png"
            
            divCompra.classList.add('comprar')
            img.classList.add('img')

            button.appendChild(imgCart)
            li.appendChild(img)
            li.appendChild(span)
            li.appendChild(h3)
            li.appendChild(pDesc)
            divCompra.appendChild(pPrice)
            divCompra.appendChild(button)
            li.appendChild(divCompra)

            ulMain.appendChild(li)
        })

    }
    static arrProdutos = []
    
    static renderProductCart(arrProduto){
        const vitriniCarrinho = document.querySelector('.listaCarrinho')
        vitriniCarrinho.innerText = ''
        arrProduto.forEach(element=>{
            
            const liContainer = document.createElement('li')
            const imgProductCart = document.createElement('img')
            const divInfo = document.createElement('div')
            const nameProductCart = document.createElement('h3')
            const spantTag = document.createElement('span')
            const pPrice = document.createElement('p')
            const buttonRemove = document.createElement('button')
            const imgRemove = document.createElement('img')

            divInfo.classList.add('infoProdutos')
            buttonRemove.classList.add('remover')

            imgProductCart.src = element.imagem
            nameProductCart.innerText = element.nome 
            spantTag.innerText = element.categoria
            pPrice.innerText = `R$ ${element.preco}`
            imgRemove.src = "src/imgs/lixo.png"

            buttonRemove.appendChild(imgRemove)
            liContainer.appendChild(imgProductCart)
            divInfo.appendChild(nameProductCart)
            divInfo.appendChild(spantTag)
            divInfo.appendChild(pPrice)
            liContainer.appendChild(divInfo)
            liContainer.appendChild(buttonRemove)
            
            vitriniCarrinho.appendChild(liContainer)
        })
        
    }

}

export {VitriniModel}