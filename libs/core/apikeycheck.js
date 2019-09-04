const config = require('config');
const errors = require('../../assets/message');
const jwt = require('jsonwebtoken');

/**
 * Enforces request to have a valid api_key, or forwards an api error.
 * @param {Request} req - express request.
 * @param {Response} res - express response.
 * @param {function(Error)} next - next callback.
 */


  let login  = (req, res) =>{
      let username = req.body.username;
      let password = req.body.password;
      // For the given username fetch user from DB
      let mockedUsername = 'admin';
      let mockedPassword = 'password';
  
      if (username && password) {
        if (username === mockedUsername && password === mockedPassword) {
          let token = jwt.sign({username: username},
            config.get('secret'),
            { expiresIn: '24h' // expires in 24 hours
            }
          );
          // return the JWT token for the future API calls
          res.json({
            success: true,
            message: 'Authentication successful!',
            token: token
          });
        } else {
          res.json(errors.invalid_username);
        }
      } else {
        res.json(errors.invalid_auth);
      }
    }
  let index = (req, res)=> {
      res.json({
        success: true,
        message: 'Index page'
      });
    }
  
    module.exports = {
        login:login,
        index :index
    }
  
 