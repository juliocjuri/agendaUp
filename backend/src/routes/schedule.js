const express = require('express');
const dbConnection = require('../../config/connection');
const router = express.Router();

const Schedule = require('../models/Schedule');

/*
* This will be the getAll route
*/
router.get('/', async (req, res) => {
})

module.exports = router