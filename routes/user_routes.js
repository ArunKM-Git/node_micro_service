const express = require('express');

const route = express.Router();

const service_path = '/';
const redirect_base_url = 'http://localhost:3001/';

//create new user
route.post(service_path, (req, res) => {
    res.redirect(307, redirect_base_url);
});

//get all user
route.get(service_path, (req, res) => {
    res.redirect(302, redirect_base_url);
});

//get single user
route.get(service_path + ':id', (req, res) => {
    res.redirect(302, redirect_base_url + req.params.id);
})

//update user
route.patch(service_path + ':id', (req, res) => {
    res.redirect(307, redirect_base_url + req.params.id);
})

//delete user
route.delete(service_path + ':id', (req, res) => {
    res.redirect(307, redirect_base_url + req.params.id);
})

module.exports = route;