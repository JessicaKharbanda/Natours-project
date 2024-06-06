const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const Router = express.Router();

Router.get('/', authController.isLoggedIn, viewsController.getOverview);
Router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
Router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
Router.get('/me', authController.isLoggedIn, viewsController.getAccount);

Router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData,
);

module.exports = Router;
