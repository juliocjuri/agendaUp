const Schedule = require('../models/Schedule');
const User = require('../models/User');

const jwt = require('jsonwebtoken');

//TODO: need to fix the status codes

const createSchedule = async (req, res) => {
     const { name, date, user, invitedEmails, completed } = req.body;
     
     const schedule = new Schedule({
          name,
          date,
          user,
          invitedEmails,
          completed
     });

     User.find({}).then((registeredUsers) => {
          let alreadySentServerResponse = false;
          registeredUsers.forEach((user, index) => {
               if(user.email != invitedEmails[index] && !alreadySentServerResponse){
                    res.status(200).json({ warnings: `Unregistered email detected (${invitedEmails[index]})`});
                    alreadySentServerResponse = true;
               }
          })
     })

     await schedule.save();
}

const getUserSchedules = async (req, res) => {
     try{
          const userSchedules = await Schedule.find({
               $or: [{
                    user: req.user.email
               }, {
                    invitedEmails: req.user.email
               }]
          })
          res.json({schedules: userSchedules, user: req.user.email})
     } catch (err){
          res.status(500).json({ error: "Couldn't make the requisition"});
     }
}

module.exports = {
     createSchedule,
     getUserSchedules
}