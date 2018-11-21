const router = require('express').Router();
const axios = require('axios')
const qs = require('qs');
const { yummlyKey } = require('../keys.js')

const food = 'chicken+dinner'

router.get('/', (req, res, next) => {
    console.log(qs.stringify(food))

    return axios({
        url: 'http://api.yummly.com/v1/api/recipes',
        method: 'GET',
        headers: {
            'X-Yummly-App-ID': yummlyKey.appId,
            'X-Yummly-App-Key': yummlyKey.appKey
        },
        params: {
            q: food
        }
    })
    .then(result => {
        console.log(res)
        res.send(result.data)
    })
    .catch(ex => console.log(ex))
})

module.exports = router