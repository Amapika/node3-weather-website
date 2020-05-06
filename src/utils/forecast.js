const request=require('request')

const forecast=(latitude,longitude,callback)=>
{
   const url='http://api.weatherstack.com/current?access_key=4067def300d1646775c351fe87a2901d&query='+latitude+','+longitude+' '
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to Connect.Network Error',undefined)
        }
        else if(response.body.error){
            callback('Unable to find the location.Try Another location',undefined)
        }
        else
        {
         
            callback(undefined,' It is currently:'+response.body.current.temperature+' degrees out but feels like:'+response.body.current.feelslike)
            
            
        }
    })
}

module.exports=forecast




// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
