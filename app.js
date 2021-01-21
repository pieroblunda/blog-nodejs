const Meanivan = require('./framework/meanivan.js');

Meanivan.checkEnvironment().then(function() {
  Meanivan.setEnvironmentValues();

  const server = require('./server.js');
  server.init();
});

// TODO: Los archivos .styl tienen que compilarse automaticamente
