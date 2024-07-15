const express = require('express');

const user_controller = require('./controllers/user_controller');

const route = express.Router();

route.post('/', user_controller.create_new_user);
route.get('/', user_controller.get_all_users);
route.get('/:id',user_controller.get_single_user);
route.patch('/:id',user_controller.update_user);
route.delete('/:id',user_controller.delete_user);

module.exports = route;