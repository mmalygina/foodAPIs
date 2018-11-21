const router = require('express').Router();
const axios = require('axios')
const qs = require('qs');
const { webknoxKey } = require('../keys.js')


const food = {
    ingredientList: "5 large apples",
    title: "chinese apple stirfry"
}


router.get('/', (req, res, next) => {
    return axios({
        url: 'https://webknox-recipes.p.mashape.com/recipes/cuisine',
        method: 'POST',
        headers: {
            "X-Mashape-Key": webknoxKey.appKey,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: qs.stringify(food)
    })
    .then(result => {
        console.log(res)
        res.send(result.data)
    })
    .catch(ex => console.log(ex))
})

module.exports = router