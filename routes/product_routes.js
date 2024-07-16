const express = require('express');

const route = express.Router();

const service_path = '/';
const redirect_base_url = 'http://localhost:3002/';

//create new product
route.post(service_path, (req, res) => {
    res.redirect(307, redirect_base_url);
});

//get all product
route.get(service_path, (req, res) => {
    res.redirect(302, redirect_base_url);
});

//get single product
route.get(service_path + ':id', (req, res) => {
    res.redirect(302, redirect_base_url + req.params.id);
})

//update product
route.patch(service_path + ':id', (req, res) => {
    res.redirect(307, redirect_base_url + req.params.id);
})

//delete product
route.delete(service_path + ':id', (req, res) => {
    res.redirect(307, redirect_base_url + req.params.id);
})

module.exports = route;