const express = require('express');
const app = express();

app.use('/nutrition', require('./nutrition'))
app.use('/recipes', require('./recipes'))
app.use('/food', require('./food'))

module.exports = app