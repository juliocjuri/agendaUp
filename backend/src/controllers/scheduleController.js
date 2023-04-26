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

     User.find({}).then((users) => {
          let alreadySentResponse = false;
          users.forEach((user, index) => {
               if(user.email != invitedEmails[index] && !alreadySentResponse){
                    res.status(400).json({ warnings: `Email without an account detected (${invitedEmails[index]})`});
                    alreadySentResponse = true;
               }
          })
     })
     
     await schedule.save();
}

module.exports = {
     createSchedule,
}