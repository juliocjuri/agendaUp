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

     User.find({}).then((registeredUsers) => {
          let alreadySentServerResponse = false;
          registeredUsers.forEach((user, index) => {
               if(user.email != invitedEmails[index] && !alreadySentServerResponse){
                    res.status(400).json({ warnings: `Unregistered email detected (${invitedEmails[index]})`});
                    alreadySentServerResponse = true;
               }
          })
     })

     await schedule.save();
}

module.exports = {
     createSchedule,
}