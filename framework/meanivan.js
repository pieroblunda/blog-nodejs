const fs = require('fs'),
      colors = require('colors'),
      dotenv = require('dotenv');

const Meanivan = function() {

  const model = {
    checkEnvironment: checkEnvironment,
    setEnvironmentValues: setEnvironmentValues
  };

  function checkEnvironment(){
    return new Promise(function(resolve, reject) {
      const path = process.cwd() + '/.env';
      fs.exists(path, function(exists) {
        if (exists) {
          console.log(colors.green('✓') + ' Environment variables loaded succesfully');
          resolve();
        }else{
          fs.copyFile('framework/files-templates/.env-template', '.env', (err) => {
            if (err) throw err;
            console.log(colors.yellow('✗ Environment configuration file was created in the root directory with the default options.'));
            console.log(colors.yellow('  Please, check each variable value at .env file'));
            reject();
            process.exit(1);
          });
        }
      });
    });
  }

  function setEnvironmentValues(){
    //process.env.BASE_PATH = __dirname;
    process.env.BASE_PATH = process.cwd();
    console.log('process.env.BASE_PATH', process.env.BASE_PATH);
    process.env.SERVER_PATH = process.env.BASE_PATH + '/server';
    process.env.MODELS_PATH = process.env.BASE_PATH + '/server/models';
    process.env.VIEWS_PATH = process.env.BASE_PATH + '/client/views';
    process.env.JSON_SPACES = 2;
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    dotenv.config();
    process.send = process.send || function () {};
  }

  return model;
};

module.exports = new Meanivan();
