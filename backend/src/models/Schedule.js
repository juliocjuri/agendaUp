const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
     name: {
          type: String
     },
     date: {
          type: Date
     },
     user: {
          type: String
     },
     invitedEmails: {
          type: Array
     },
     completed: {
          type: Boolean
     }
})

module.exports = Schedule = mongoose.model("schedule", ScheduleSchema);