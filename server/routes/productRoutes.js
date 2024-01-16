const express = require('express');
const {getAllProducts,createAllProducts} = require('../controllers/productController');
const { route } = require('./userRoutes');
const router = express.Router();
router.get('/',getAllProducts);
router.post('/',createAllProducts);
module.exports = router;
