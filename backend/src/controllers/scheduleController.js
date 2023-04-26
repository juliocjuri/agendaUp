const Schedule = require('../models/Schedule');
const User = require('../models/User');

const jwt = require('jsonwebtoken');

const createSchedule = async (req, res) => {
     const { name, date, user, invitedEmails } = req.body;
     
     const schedule = new Schedule({
          name,
          date,
          user,
          invitedEmails
     });

     await schedule.save();
}

module.exports = {
     createSchedule,
}