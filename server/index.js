const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const path = require('path');

app.use(require('body-parser').json());
app.use(require('body-parser').text());
// app.use('/public', express.static(path.join(__dirname, '../public')));
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));


app.use('/api/edamam', require('./edamam'));  //edamam has 3 APIS: 1. recipes, 2. nutrition
app.use('/api/webknox', require('./webknox'));  //webknox Recipe API
app.use('/api/yummly', require('./yummly'));  //yummly food API

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send({ error: err.message });
})


app.listen(PORT, () => console.log(`

    Listening on PORT ${PORT}!
    http://localhost:${PORT}/

`))