const express = require('express');
const app = express();

app.use('/getrecipe', require('./getRecipe'))
// app.use('/searchrecipe', require('./searchRecipe'))


module.exports = app

//DOCUMENTATION:
// https://developer.yummly.com/documentation

//PRICING:
// we are on the "free" hackathon plan
