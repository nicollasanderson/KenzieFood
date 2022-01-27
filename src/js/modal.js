import {MyProductController} from '../controllers/my-product-controller.js'

const fechar = document.querySelector('.modal-fechar')
const modal = document.querySelector('.container-modal')
const main_buttons = document.querySelector('.modal-main-buttons')
const buttonAdd = document.getElementById('addProduct')

let funcao = 'novo'
fechar.addEventListener('click', () => {
  modal.classList.add('display-none')
})

main_buttons.addEventListener('click', async (ev) => {
  if(ev.target.classList.contains('modal-button')){
  const botoes = document.querySelectorAll('.modal-button')
  botoes.forEach(botao => {
      botao.classList.remove('button-selected')   
  })
  ev.target.classList.add('button-selected')
  const selec_list = document.querySelector('.modal-form-select')
  
  if(ev.target.classList.contains('button-novo')){
    funcao = 'novo' 
    selec_list.classList.remove('display-block')
    selec_list.classList.add('display-none')
  }else if(ev.target.classList.contains('button-alterar')){
    funcao = 'alterar'
    selec_list.classList.remove('display-none')
    selec_list.classList.add('display-block')

    const listaProdutos = await MyProductController.getAll()
    const select = document.getElementById('modal-form-select')
    listaProdutos.forEach(element=>{
      const option = document.createElement('option')
      option.value = element.id
      option.innerText = element.nome
      select.appendChild(option)
    })
  }else{
    funcao = 'delete'
    selec_list.classList.remove('display-none')
    selec_list.classList.add('display-block')

    const listaProdutos = await MyProductController.getAll()
    const select = document.getElementById('modal-form-select')
    listaProdutos.forEach(element=>{
      const option = document.createElement('option')
      option.value = element.id
      option.innerText = element.nome
      select.appendChild(option)
    })
  }
}
})

const btn_salvar = document.querySelector('.modal-main-salvar')

btn_salvar.addEventListener('click', async (ev) => {
  ev.preventDefault()
  if(funcao === 'novo'){
    const nome = document.getElementById('modal-form-nome').value
    const preco = document.getElementById('modal-form-preco').value
    const desc = document.getElementById('modal-form-descricao').value
    const img = document.getElementById('modal-form-imagem').value

    const product = {
      'nome': nome,
      'preco': parseFloat(preco),
      'categoria':'teste',
      'imagem':img,
      'descricao':desc      
    }

    MyProductController.create(product)
  }else if(funcao === 'alterar'){
    
    console.log(select.value);
    console.log(await MyProductController.getAll())
  }else{
    console.log('deletar')
  }
})

buttonAdd.addEventListener('click',function(){
  modal.classList.remove('display-none')
})