class VitriniModel{
    static renderProduct(arrProdutcs){
        console.log(arrProdutcs);
        arrProdutcs.forEach(element=>{
            const divMain = document.createElement('div')
            const img = document.createElement('img')
            const h3 = document.createElement('h3')
            const pDesc = document.createElement('p')
            const pPrice = document.createElement('p')
            const button = document.createElement('button')
            const containerBoxProduto = document.getElementById('containerBoxProduto')

            img.src = element.imagem
            img.alt = element.nome
            h3.innerText = element.nome
            pDesc.innerText = element.descricao
            pPrice.innerText = `R$ ${element.preco}`
            button.classList.add('botaoCarrinho')
            img.classList.add('img')

            divMain.appendChild(img)
            divMain.appendChild(h3)
            divMain.appendChild(pDesc)
            divMain.appendChild(pPrice)
            divMain.appendChild(button)

            containerBoxProduto.appendChild(divMain)
        })

    }
    // static arrProdutos = []
    
    // static renderProductCart(divProduto){
    //     const aside = document.getElementById('carrinho')

    //     const containerProductCart = document.createElement('div')
    //     const imgProductCart = document.createElement('img')
    //     const nameProductCart = document.createElement('h3')
    //     const pTag = document.createElement('p')
    //     const pPrice = document.createElement('p')
    //     const buttonRemove = document.createElement('button')
    //     buttonRemove.classList.add('buttonRemove')

    //     imgProductCart.src = divProduto.querySelector('img').src
    //     nameProductCart.innerText = divProduto.querySelector('h3').innerText

    //     containerProductCart.appendChild(imgProductCart)
    //     containerProductCart.appendChild(nameProductCart)
    //     containerProductCart.appendChild(buttonRemove)
        
    //     aside.appendChild(containerProductCart)
        
        
    // }

}

export {VitriniModel}