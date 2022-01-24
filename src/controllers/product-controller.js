const RequestAPI = require('../request/request')

class ProductController{
    static async getAll(){
      const request = new RequestAPI()
      const data = await request.getProduct('https://kenzie-food-api.herokuapp.com/product')
      const products = await data.json()
      return products
    }
}

module.exports = ProductController