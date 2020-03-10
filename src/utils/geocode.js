const request = require('request')

const geocode = (address,callback) =>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoidGFsaWIwMDEiLCJhIjoiY2s1dXhyajQ0MG15NTNscGZqMTkzMDR0NiJ9.PhwEMVW-5mk06iWwepqHow'

    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Can\'t connect to location service',undefined)

        }else if(response.body.features.length === 0){
            callback('Unable to find Location',undefined)
        }else{
            callback(undefined,{
                longitude:response.body.features[0].center[0],
                latitude:response.body.features[0].center[1],
                location:response.body.features[0].place_name
            })
        }
    }) 
}

module.exports = geocode 