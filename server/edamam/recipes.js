const router = require('express').Router();
const axios = require('axios')
const { edamamKey } = require('../keys.js')

router.get('/', (req, res, next) => {
    return axios({
        url: 'https://api.edamam.com/search',
        method: 'GET',
        params: {
            q: 'beef',
            app_id: edamamKey.recipes.appId,
            app_key: edamamKey.recipes.appKey,
        }
    })
    .then(result => {
        console.log(res)
        res.send(result.data)
    })
    .catch(ex => console.log(ex))
})

module.exports = router