const jwt = require("jsonwebtoken");
const config = require("config");
const errors = require("../assets/message");

let validatetoken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"]; // Express headers are auto converted to lowercase

  if (token) {
    if (token.startsWith("Bearer ")) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }

    jwt.verify(token, config.get('secret'), (err, decoded) => {
      if (err) {
        return res.json(errors.invalid_auth);
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json(errors.invalid_key);
  }
};

module.exports = {
  validateToken: validatetoken
};
