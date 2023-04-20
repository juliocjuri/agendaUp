const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
     name: {
          type: String
     },
     date: {
          type: Date
     }
})

module.exports = Schedule = mongoose.model("schedule", ScheduleSchema);