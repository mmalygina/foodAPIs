const express = require('express');
const app = express();

app.use('/widget', require('./widget'))
app.use('/cuisine', require('./cuisine'))
app.use('/ingredient', require('./ingredient'))

module.exports = app

//DOCUMENTATION:
//https://market.mashape.com/webknox/recipe#create-recipe-card

//PRICING:
//* 10 free API calls a day
//* unlimited wiget usage