const User = require('../models/User');
const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {
     const { name, email, password } = req.body; //This needs body-parser

     const user = new User({
          name,
          email,
          password
     });

     const salt = await bcrypt.genSalt(10);
     user.password = await bcrypt.hash(password, salt);

     await user.save();

}

module.exports = {
     createUser,
}