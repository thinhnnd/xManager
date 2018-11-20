const express = require('express');
const route = express.Router();
const bodyParser = require('body-parser');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const checkController = require('../controllers/checkController');
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true }));

route.get('/', checkController.checkin);

module.exports = route;