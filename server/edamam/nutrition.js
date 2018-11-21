const router = require('express').Router();
const axios = require('axios')

const exampleBody = 
{
  "title": "Fresh Ham Roasted With Rye Bread and Dried Fruit Stuffing",
  "prep": "1. Have your butcher bone and butterfly the ham and score the fat in a diamond pattern. ...",
  "yield": "About 15 servings",
  "ingr": [
    "1 fresh ham, about 18 pounds, prepared by your butcher (See Step 1)",
    "7 cloves garlic, minced",
    "1 tablespoon caraway seeds, crushed",
    "4 teaspoons salt",
    "Freshly ground pepper to taste",
    "1 teaspoon olive oil",
    "1 medium onion, peeled and chopped",
    "3 cups sourdough rye bread, cut into 1/2-inch cubes",
    "1 1/4 cups coarsely chopped pitted prunes",
    "1 1/4 cups coarsely chopped dried apricots",
    "1 large tart apple, peeled, cored and cut into 1/2-inch cubes",
    "2 teaspoons chopped fresh rosemary",
    "1 egg, lightly beaten",
    "1 cup chicken broth, homemade or low-sodium canned"
  ]
}

//gets nutrition information for specific ingredient (e.g. one large pineappele, ingredient string needs to be URL encoded, i.e. replace spaces with %20
router.get('/data', (req,res, next) => {
    return axios({
        url: 'https://api.edamam.com/api/nutrition-data',
        method: 'GET',
        params: {
            app_id: 'c580d073',
            app_key: '2d2b016b42ffabc075c3cd040df59c8a',
            ingr: "one%20large%20pineapple"
        }

    })
    .then (result => {
        res.send(result.data)
    })
})


// gets nutrition information for a recipe when fed json data
router.get('/', (req, res, next) => {
    return axios({
        url: 'https://api.edamam.com/api/nutrition-details',
        method: 'POST',
        params: {
            app_id: 'c580d073',
            app_key: '2d2b016b42ffabc075c3cd040df59c8a',
        },
        data: exampleBody
    })
    .then(result => {
        console.log(res)
        res.send(result.data)
    })
    .catch(ex => console.log(ex))
})



module.exports = router