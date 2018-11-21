const router = require('express').Router();
const axios = require('axios')
const { edamamKey } = require('../keys.js')


router.get('/', (req, res, next) => {
    return axios({
        url: 'https://api.edamam.com/api/food-database/parser',
        method: 'GET',
        params: {
            ingr: "pineapple",
            app_id: edamamKey.food.appId,
            app_key: edamamKey.food.appKey,
        }
    })
    .then(result => {
        console.log(edamamKey)
        res.send(result.data)
    })
    .catch(ex => console.log(ex))
})

module.exports = router