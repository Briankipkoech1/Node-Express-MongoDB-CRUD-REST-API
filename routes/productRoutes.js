const express = require('express');
const router = express.Router();
const Product = require('../model/product');
const productController=require('../controller/productController')


router.get('/', productController.getAllPoducts );
router.get('/:id', productController.getProductById )
router.post('/create', productController.createProduct);
router.patch('/:id', productController.updateProduct );
router.delete('/:id', productController.deleteProduct)
router.delete('/', productController.deleteAllProducts);

module.exports = router;
