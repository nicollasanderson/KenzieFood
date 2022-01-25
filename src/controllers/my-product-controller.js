import {RequestAPI} from '../request/requeste.js'

const urlAPI = 'https://kenzie-food-api.herokuapp.com/my/product'
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTY0MzExNzgyNiwiZXhwIjoxNjQzOTgxODI2LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.qqcyKNMDkRvOA-K7-L6vSo7HEW-if-jqwV3WH_yOypA'


class MyProductController{
    static async getAll(){
      const config = {
        method: "get", 
        headers: {
          "Content-Type": "application/json",
         "Authorization": token
        }
      }
      const data = await RequestAPI.getMyProduct(urlAPI, config)
      return data
    }

    static async getById(id){
      const config = {
        method: "get", 
        headers: {
          "Content-Type": "application/json",
         "Authorization": token
        }
      }
      const data = await RequestAPI.getMyProduct(`${urlAPI}/${id}`, config)
      return data
    }

    static async deleteProduct(id){
      const config = {
        method: "delete", 
        headers: {
          "Content-Type": "application/json",
         "Authorization": token
        }
      }
      const data = await RequestAPI.getMyProduct(`${urlAPI}/${id}`, config)
      return data
    }

    static async create(product){
      const config = {
        method: "post", 
        headers: {
          "Content-Type": "application/json",
         "Authorization": token
        },
        body: JSON.stringify(product)
      }
      const data = await RequestAPI.getMyProduct(urlAPI, config)
      return data
    }

    static async patchProduct(id,product){
      console.log(product)
      const config = {
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json",
         "Authorization": token
        },
        body: JSON.stringify(product)
      }
      const data = await RequestAPI.getMyProduct(`${urlAPI}/${id}`, config)
      console.log(config)
      return data
    }
}

export {MyProductController}