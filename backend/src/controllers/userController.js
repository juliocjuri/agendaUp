const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
     const { name, email, password } = req.body;

     const alreadyExists = await User.findOne({ email });

     if(alreadyExists){
          return res.status(400).json();
     }


     const user = new User({
          name,
          email,
          password
     });

     const salt = await bcrypt.genSalt(10);
     user.password = await bcrypt.hash(password, salt);

     await user.save();

     const payload = {
          user: {
               id: user._id,
          }
     }

     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' }, (error) => {
               if(!error) return res.json({ token }).status(200)
          }
     )
}

const authUser = async (req, res) => {
     const { email, password } = req.body;

     const user = await User.findOne({
          email
     })

     if(!user){
          return res.status(400).json()
     }

     const isPasswordCorrect = await bcrypt.compare(password, user.password);

     if(!isPasswordCorrect){
          return res.status(400).json()
     }

     const payload = {
          user: {
               id: user._id
          }
     }

     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d'}, (error, token) => {
               if(!error) return res.json({ token }).status(200)
          }
     )
}

module.exports = {
     createUser,
     authUser
}