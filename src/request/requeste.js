class RequestAPI{
   static getProduct(urlAPI){
    const response = fetch(urlAPI).then(resp => resp.json())
    return response
  }
}

export{RequestAPI}