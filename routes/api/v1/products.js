const express = require('express');

const router = express.Router();
const productsApi = require("../../../controllers/api/v1/products_api");


//create a new product
router.post('/createProduct',productsApi.create);

//get all product Lists
router.get('/' , productsApi.index);

//update the product with specific id
router.post('/:id/update-quantity/' , productsApi.updateProduct);

//delete the product permanently from database with specific id 
router.delete('/delete-product/:id' , productsApi.destroy);



module.exports = router;