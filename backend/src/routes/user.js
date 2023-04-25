const express = require('express');
const userController = require('../controllers/userController');
const authentication = require('../../middlewares/auth');

const router = express.Router();

router.post('/create', userController.createUser); 
router.post('/auth', userController.authUser); 

module.exports = router