const express = require('express');
const router = express.Router();
const logger = require('../middlewares/logger.js');

const {
    getProducts,
    getProduct,
    searchProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controller/products.js');

router.get('/', logger,getProducts); // can add middleware to specific route ex logger in this route
router.get('/:id', getProduct);
router.get('/:id', searchProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

// all the '/' and the '/:id' will be based on the route we would give on server.js

module.exports = router; 