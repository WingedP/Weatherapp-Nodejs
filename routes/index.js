var express = require('express');
var router = express.Router();
const getCoords = require("../utils/getCoord");
const getWeather = require("../utils/getWeather");

/* GET home page. */
//chain functions
//use coordinates to fetch weather
router.get("/weather",function(req,res){
  const query=req.query;
//use city's name to get geo coordinates
if(!query.city){ return res.redirect("/")}
getCoords(res, query.city, getWeather)
  // res.render("weather",{
  //   city: query.city
  // });
})



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Weather App Nova Express' });
});

module.exports = router;
