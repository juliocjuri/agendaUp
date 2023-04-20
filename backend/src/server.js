const dotenv = require('dotenv');
const express = require('express');
const scheduleRoutes = require('./routes/schedule')
const connection = require('../config/connection')

connection();

dotenv.config();

const app = express();

app.use('/api/schedule', scheduleRoutes)

const PORT = process.env.SERVER_PORT || 3333

app.listen(PORT, () => console.log(`Server launched, port ${PORT}`))

dotenv.config();


