'use strict'
const Articles = require(`${process.env.MODELS_PATH}/articles.server.model`);

module.exports.getFooter = function(req, res, next) {
  Articles.getFooter(4).then(function(result){
    req.middleware = {};
    req.middleware.footer = result;
    next();
  });
};
