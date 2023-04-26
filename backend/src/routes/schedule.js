const express = require('express');
const dbConnection = require('../../config/connection');
const router = express.Router();

const Schedule = require('../models/Schedule');
const scheduleController = require('../controllers/scheduleController');

router.post('/create', scheduleController.createSchedule)

module.exports = router