# foodAPIs

To start server: npm start

PORT = 3000


Routes:

EDAMAM
1. /api/edamam/food
   -- input = ingredient (string)
   -- output = nutritional and other information for that food
   -- example input used for this route =  "pineapple"
2. /api/edamam/nutrition
   -- input = ingredients for a recipe (array of strings)
   -- output = nutritional information for the recipe
   -- example input used for this route = recipe for roasted ham
3. /api/edamam/recipes 
   -- input = ingredient (string)
   -- output = list of recipes based on search string
   -- example input used for this route = "beef"

WEBKNOX
1. /api/webknox/cuisine
   -- input = recipe name
   -- output = cuisine (i.e. classifies cuisine of recipe based on ingredients and recipe title)
   -- example input used for this route =  "chinese apple stirfry"
2. /api/webknox/ingredient
   -- input = ingredient
   -- output = recipes that include the ingredient
   -- example input used for this route = "milk"

YUMMLY
1. /api/yummly/getrecipe
   -- input = search string, e.g. ingredient
   -- output = recipe
   -- example input used for this route = "chicken dinner"
