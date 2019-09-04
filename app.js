const express = require('express')
const bodyParser = require('body-parser');
const config = require('config');
const app = express();
const cors = require('cors')
const apikeycheck = require('./libs/core/apikeycheck')
const middleware =  require('./middleware/generateTokens')
const errorHanlder = require('./libs/core/errorhandler');
const multer = require('multer');
var upload = multer();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use('/login', apikeycheck.login);
app.use('/',middleware.validateToken,upload.array("images",20), require('./handlers'));
app.use(errorHanlder);
let port = process.env.PORT || config.get('app.port');

app.listen(port, (err) => {
    console.log('Application is listening on ' + port);
  });