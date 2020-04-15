const request= require('request');


function getCoord(res, city, callback){
console.log("YOUR CITY:",city)
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    city
  )}.json?access_token=${process.env.MAPBOX}`;
  request({ url: url, json: true }, (error, {body}) => {
if(error) return console.log(error)
// console.log(body.features[0].geometry.coordinates)
const [lng, lat] =   body.features[0].geometry.coordinates
// console.log(lng, lat)  

callback(res, city, lng, lat)

    })
}




module.exports = getCoord;  
