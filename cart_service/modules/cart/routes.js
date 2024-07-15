const express = require('express');

const cart_controller = require('./controllers/cart_controller');

const route = express.Router();

route.post('/', cart_controller.add_to_cart);
route.get('/', cart_controller.get_cart);
route.patch('/:id',cart_controller.update_quantity);
route.delete('/:id',cart_controller.delete_from_cart);

module.exports = route;