module.exports = {
    //--------------------- GENERIC ERRORS -------------------------/
    internal_error: {
      status_code: 500,
      error_code: 'INTERNAL_SERVER_ERROR',
      description: 'Something went wrong on server. Please contact server admin.'
    },
  
    invalid_key: {
      status_code: 401,
      error_code: 'INVALID_AUTH',
      description: 'Valid auth key is required. Please provide a valid auth key along with request.'
    },
  
    invalid_input: {
      status_code: 400,
      error_code: 'INVALID_INPUT',
      description: 'The request input is not as expected by API. Please provide valid input.'
    },
  
    invalid_credentials: {
      status_code: 401,
      error_code: 'INVALID_CREDENTIALS',
      description: 'Valid Credentials are required. Please provide a valid Credentials along with request.'
    },
  
    session_expired: {
      status_code: 401,
      error_code: 'SESSION_EXPIRED',
      description: 'Session has expired, please login again.'
    },
  
    invalid_auth: {
      status_code: 401,
      error_code: 'INVALID_AUTH',
      description: 'Valid auth token is required. Please provide a valid auth token along with request.'
    },
  
    invalid_password: {
      status_code: 400,
      error_code: 'INVALID_PASSWORD',
      description: 'Password should contain one special character,one upper case letter ,one numeric value and length must be more than eight.'
    },
  
    invalid_username: {
      status_code: 400,
      error_code: 'INVALID_USERNAME',
      description: 'Please enter valid uername'
    },
  }
  