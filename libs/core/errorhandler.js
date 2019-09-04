const internalError = require("../../assets/message").internal_error;

//todo add a logger

/**
 * Error handling middleware that responds with formatted error JSON.
 * @param {*} err - error.
 * @param {Object} req - express request.
 * @param {Object} res - express response.
 * @param {function(err)} next - express next.
 */

module.exports = (err, req, res, next) => {
  if (err) {
    let error = err;
    //check for unhandeled error then log error on console and response with internal server error
    if (!err.status_code) {
      //todo logger
      return
    }
    return res.status(error.status_code).json({
      errorCode: error.error_code,
      description: error.description,
      error: error.error
    });
  }
  return next();
};
