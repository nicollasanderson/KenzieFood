class ProdutoModel{
  constructor(nome, preco, categoria, imagem){
      if(this.validaUrlImagem(imagem) && Number(preco) >= 0){
        this.nome = `${nome}`
        this.preco = preco
        this.categoria = `${categoria}`
        this.imagem = `${imagem}`
      }
  }

  validaUrlImagem(url){
    try{
      const urlImagem = new URL(url)
      return true
    }catch(err){
      return false
    }
  }
}

export {ProdutoModel}