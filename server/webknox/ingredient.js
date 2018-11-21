const router = require('express').Router();
const axios = require('axios')
const qs = require('qs');
const { webknoxKey } = require('../keys.js')


const food = {
    ingredients: "milk",
    number: 5
}


router.get('/', (req, res, next) => {
    return axios({
        url: 'https://webknox-recipes.p.mashape.com/recipes/findByIngredients',
        method: 'GET',
        headers: {
            "X-Mashape-Key": webknoxKey.appKey,
            // "Accept": "application/json"
        },
        params: food
    })
    .then(result => {
        console.log(res)
        res.send(result.data)
    })
    .catch(ex => console.log(ex))
})

module.exports = router