const request = require('request')

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location services!', undefined)
//         } else if(response.body.features.length===0){
//              callback('Unable to Find the Location',undefined)
//         } else {
//             callback(undefined, {
//                 latitude: response.body.features[0].center[1],
//                 longitude: response.body.features[0].center[0],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }

// const linkmap='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW1hbjA3IiwiYSI6ImNrOWtid2hnYjBleWEzZXBpMWE0ZzlvOXEifQ.vyeTofA_xPOvKpZYv6_6xg&limit=1'
//  request({url:linkmap,json:true},(error,response)=>{
//      if(error){
//          console.log('Unable to connect weather api')
//      }else if(response.body.features.length===0){
//          console.log('Unable to Find the Location')
//      }else{
//      console.log("Detials of LA:")
//      console.log("Longitude:"+response.body.features[0].center[0]+" latitude:"+response.body.features[0].center[1])    
//      }

    
//  })
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW1hbjA3IiwiYSI6ImNrOWtid2hnYjBleWEzZXBpMWE0ZzlvOXEifQ.vyeTofA_xPOvKpZYv6_6xg&limit=1'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to Connect the internet',undefined)
        }
        else if(response.body.features.length===0){
            callback('Unable to find location.try something else',undefined)
        }
        else{
            callback(undefined,{
                 location:response.body.features[0].place_name,
                 longitude:response.body.features[0].center[0],
                 latitude:response.body.features[0].center[1]
            })
        }     
    })
}



module.exports = geocode
