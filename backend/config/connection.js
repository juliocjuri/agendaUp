const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@agendaup.7edfdox.mongodb.net/test`

console.log(mongoUri)

const dbConnection = async () => {
     try {
          await mongoose.connect(
               mongoUri
          )
     } catch (err) {
          console.log(err.message)
     }
}

module.exports = dbConnection
