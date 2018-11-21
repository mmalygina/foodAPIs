const router = require('express').Router();
const axios = require('axios')
const qs = require('qs');
const { webknoxKey } = require('../keys.js')

const exampleCard = {
    "author": "Cheffy McChef",
    "backgroundColor": "#ffffff",
    "backgroundImage": "background1",
    "fontColor": "#333333",
    "ingredients": "green beans",
    "instructions": "cook the beans",
    "servings": 2,
    "readyInMinutes": 45,
    "title": "food food"
}

const exampleCard2 = {
    author: "Cheffy McChef",
    backgroundColor: "#ffffff",
    backgroundImage: "background1",
    fontColor: "#333333",
    ingredients: "green beans",
    instructions: "cook the beans",
    servings: 2,
    readyInMinutes: 45,
    title: "food food"
}

router.get('/card', (req, res, next) => {
    return axios({
        url: 'https://webknox-recipes.p.mashape.com/recipes/visualizeRecipe',
        method: 'POST',
        headers: {
            "X-Mashape-Key": webknoxKey.appKey
        },
        data: qs.stringify(exampleCard2)
    })
    .then(result => {
        console.log(res)
        res.send(result.data)
    })
    .catch(ex => console.log(ex))
})

module.exports = router