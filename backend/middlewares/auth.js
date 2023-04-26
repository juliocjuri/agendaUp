const jwt = require('jsonwebtoken');

const authentication = async (req, res, next) => {
     //Business rule of the token authentication
     const { token } = req.cookies;

     if(!token) return res.status(401).json({ error: 'You have to login'})

     const verification = jwt.verify(
          token,
          process.env.JWT_SECRET,
          (err, decoded) => {
               if(err) return res.status(401).json({ error: 'The token expired'})
               else {
                    req.user = decoded.user;
                    next();
               }
          }
     )
}

module.exports = authentication