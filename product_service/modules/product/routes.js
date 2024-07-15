const express = require('express');

const product_controller = require('./controllers/product_controller');

const route = express.Router();

route.post('/', product_controller.create_new_product);
route.get('/', product_controller.get_all_products);
route.get('/:id',product_controller.get_single_product);
route.patch('/:id',product_controller.update_product);
route.delete('/:id',product_controller.delete_product);

module.exports = route;