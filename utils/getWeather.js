const request=require('request');


function getWeather(res, city, lng,lat){  
console.log(lng,lat, "come from getweather")
 const url=`https://api.darksky.net/forecast/${process.env.DARK_SKY}/${lat},${lng}`

request({url:url,json:true},(error,{body})=>{
    if (error) return console.log(error)
    const temp =body.currently.temperature
    const feelslike=body.currently.apparentTemperature
    const icon=body.currently.icon
    const summary=body.currently.summary
    res.render("weather", {temp:temp, city:city,feelslike:feelslike, icon:icon, summary:summary})
})

}

module.exports=getWeather