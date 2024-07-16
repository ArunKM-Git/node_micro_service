const express = require('express');

const route = express.Router();

const service_path = '/';
const redirect_base_url = 'http://localhost:3003/';

//add to cart
route.post(service_path, (req, res) => {
    res.redirect(307, redirect_base_url);
})

//get cart
route.get(service_path, (req, res) => {
    res.redirect(302, redirect_base_url);
})

//update quantity
route.patch(service_path + ':id', (req, res) => {
    res.redirect(307, redirect_base_url + req.params.id);
})

//delete from cart
route.delete(service_path + ':id', (req, res) => {
    res.redirect(307, redirect_base_url + req.params.id);
})

module.exports = route;