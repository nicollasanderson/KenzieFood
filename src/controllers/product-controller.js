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
}

export {ProductController}