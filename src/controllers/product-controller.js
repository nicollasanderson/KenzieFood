import {RequestAPI} from '../request/requeste.js'

const urlAPI = 'https://kenzie-food-api.herokuapp.com/product'
class ProductController{
    static async getAll(){
      const data = await RequestAPI.getProduct(urlAPI)
      return data
    }

    static async getById(id){
      const data = await RequestAPI.getProduct(urlAPI + `/${id}`)
      return data
    }

    static async filterProductByCategory(category){
      const data = await this.getAll()
      const filtered = data.filter(product => product.categoria === category)
      return filtered
    }

    static async filterProductByName(name){
      const data = await this.getAll()
      const filtered = data.filter(product => product.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()))
      return filtered
    }
}

export {ProductController}