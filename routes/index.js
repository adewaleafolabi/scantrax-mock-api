var express = require('express');
var router = express.Router();


const categoryController = require('../controllers/category')
const productController = require('../controllers/product')

router.get('/category/list', categoryController.all);
router.get('/product/list', productController.all);

// router.get('/products', productController.all);
// router.get('/products/:id', productController.byId);
// router.post('/products', productController.create);
// router.put('/products/:id', productController.update);
// router.delete('/products/:id', productController.remove);


module.exports = router;