'use strict';
const Articles = require(`${process.env.MODELS_PATH}/articles.server.model`);

/**
@jsDoc
@description: Getter function
@params: req - Express request object
@params: res - Express response object
@response: Array with all documents in database
*/
module.exports.getAll = function(req, res) {
  Articles.getAll().then(function(result) {
    res.json(result);
  });
};

/**
@jsDoc
@description: Getter function
@params: req - Express request object
@params: res - Express response object
@response: Array with all documents in database
*/
module.exports.getLastN = function(req, res) {
  let n = parseInt(req.params.n);
  Articles.getLastN(n).then(function(result) {
    res.json(result);
  });
};

/**
@jsDoc
@description: Getter function
@params: req - Express request object
@params: res - Express response object
@response: Array with all documents in database
*/
module.exports.getMostReadedN = function(req, res) {
  let n = parseInt(req.params.n);
  Articles.getMostReadedN(n).then(function(result) {
    res.json(result);
  });
};

/**
@jsDoc
@description: Get One
@params: req - Express request object
@params: res - Express response object
@response: Array with all documents in database
*/
module.exports.findByName = function(req, res) {
  Articles.findByName(req.params.title).then(function(result) {
    res.json(result);
  });
};

/**
@jsDoc
@description: Get One
@params: req - Express request object
@params: res - Express response object
@response: Array with all documents in database
*/
module.exports.findByTag = function(req, res) {
  Articles.findByTag(req.params.tag).then(function(result) {
    res.json(result);
  });
};

/**
@jsDoc
@description: Vote an article
@params: req - Express request object
@params: res - Express response object
@response: Null
*/
module.exports.vote = function(req, res) {
  Articles.vote(req.params.fileName, req.params.voteType).then(function(result) {
    res.json(result);
  });
};
