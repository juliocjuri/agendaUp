const dotenv = require('dotenv');
const express = require('express');
const scheduleRoutes = require('./routes/schedule');
const userRoutes = require('./routes/user');
const connection = require('../config/connection');
const bodyParser = require('body-parser');

connection();

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use('/api/schedule', scheduleRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.SERVER_PORT || 3333

app.listen(PORT, () => console.log(`Server launched, port ${PORT}`))

dotenv.config();


