var config = require('../config').config;
if(config.test_jwt_claim_set_iss == '' || config.test_pem_file == '' || config.test_modelID == '') {
  throw new Error({
    message:'Provide test_jwt_claim_set_iss, test_pem_file, and test_modelID in config/config.js for these tests to run'
    });
} else {
  require('urun')(__dirname, {include: /test[^\/]+\.js$/});
}
