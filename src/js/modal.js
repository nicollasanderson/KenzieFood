const fechar = document.querySelector('.modal-fechar')
const modal = document.querySelector('.container-modal')
const main_buttons = document.querySelector('.modal-main-buttons')
let funcao = 'novo'
fechar.addEventListener('click', () => {
  modal.classList.add('display-none')
})

main_buttons.addEventListener('click', (ev) => {
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
  }else{
    funcao = 'delete'
    selec_list.classList.remove('display-none')
    selec_list.classList.add('display-block')
  }
}
})

const btn_salvar = document.querySelector('.modal-main-salvar')

btn_salvar.addEventListener('click', (ev) => {
  ev.preventDefault()
  if(funcao === 'novo'){
    console.log('novo')
  }else if(funcao === 'alterar'){
    console.log('alterar')
  }else{
    console.log('deletar')
  }
})