const fetch = require('node-fetch')
class RequestAPI{
   getProduct(urlAPI){
    console.log(urlAPI)
    const response =  fetch(urlAPI)
    const data =  response.json()
    return data
  }
}

module.exports = RequestAPI