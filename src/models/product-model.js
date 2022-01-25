class VitriniModel{
    static renderProduct(arrProdutcs){
        
        arrProdutcs.forEach(element=>{
            const divMain = document.createElement('div')
            const figure = document.createElement('figure')
            const img = document.createElement('img')
            const figcap = document.createElement('figurecaption')
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
            
            figure.appendChild(img)
            figure.appendChild(figcap)
            divMain.appendChild(figure)
            divMain.appendChild(h3)
            divMain.appendChild(pDesc)
            divMain.appendChild(pPrice)
            divMain.appendChild(button)

            containerBoxProduto.appendChild(divMain)
        })

    }
}

export {VitriniModel}