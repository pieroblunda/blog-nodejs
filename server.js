/* @ToDo: https://expressjs.com/es/advanced/best-practice-performance.html#code */
/* @ToDo: https://blog.cloud66.com/installing-nginx-and-http-2-in-your-local-development-environment/ */

'use strict';
const app = require('express')(),
      dbclient = require('./framework/dbclient'),
      Fixtures = require('./server/models/fixtures.model'),
      routes = require('./server/routes'),
      colors = require('colors'),
      express = require('express');

module.exports.init = function(){
  console.log('=============================================================');
  console.log('Starting HTTP server');
  console.log('=============================================================');

  // Init DB connection
  dbclient.connect(function(err){

    if(err){
      console.log(colors.red('✗') + ' Error on mongodb connection: ', err);
      return false;
    }

    console.log(colors.green('✓') + ' Connected to mongodb succesfully');

    Fixtures.run();
    console.log(colors.green('✓') + ' Fixtures extecuted succesfully');

    // App Config
    app.set('view engine', 'pug');
    app.set('views', process.env.VIEWS_PATH);
    app.set('json spaces', process.env.JSON_SPACES);
    app.use(express.static(__dirname + '/public'));
    console.log(colors.green('✓') + ' Connected to mongodb succesfully');

    // Route
    routes.init(app);
    console.log(colors.green('✓') + ' Routes setted succesfully');

    app.listen(process.env.PORT, function(){
      console.log('NODE_ENV', process.env.NODE_ENV);
      console.log('PORT', process.env.PORT);
      console.log('DB_NAME', process.env.DB_NAME);
      console.log('NODE_TLS_REJECT_UNAUTHORIZED', process.env.NODE_TLS_REJECT_UNAUTHORIZED);
      console.log('BASE_PATH', process.env.BASE_PATH);

      // Here we send the ready signal to PM2
      process.send('ready');
      console.log('Done!');
    });

  });
};
