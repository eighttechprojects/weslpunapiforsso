const express = require('express');

const router = express.Router();

const LoginController = require('./controllers/login');

const loginController = new LoginController();

router.get('/login', loginController.login);

module.exports = router;