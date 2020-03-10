const request = require('request')


const forecast=(latitude,longitude,location,callback)=>{
    const url="https://api.darksky.net/forecast/62efbc8ff6f5ad0e1cf339cbb346442c/"+latitude+","+longitude+"?units=si&lang=en"
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Can\'t connect to weather service',undefined)
        }else if(response.body.error){
            callback('Unable to find Location',undefined)
        }else{
            callback(undefined,'Its '+response.body.currently.temperature+' degree centrigrade in '+location+' and '+ response.body.daily.data[0].summary)
        }
    }) 
}

module.exports = forecast