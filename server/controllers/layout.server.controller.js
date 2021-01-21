'use strict';
var moment = require('moment'),
    Articles = require(`${process.env.MODELS_PATH}/articles.server.model`);


/**
@jsDoc
@description: Get One
@params: req - Express request object
@params: res - Express response object
@response: Array with all documents in database
*/
module.exports.renderArticles = function(req, res) {
  Articles.getLastN(0).then(function(result) {
    res.render('layout', {
      view: 'searchResult',
      articles: result,
      mostReaded: req.middleware.footer.mostReaded,
      lastAdded: req.middleware.footer.lastAdded
    });
  });
};

/**
@jsDoc
@description: Get One
@params: req - Express request object
@params: res - Express response object
@response: Array with all documents in database
*/
module.exports.renderArticle = function(req, res) {
  let returnObject = {};
  Articles.findByName(req.params.title).then(function(article) {
    returnObject = article;
    returnObject.revisionDate = moment(article.revisionDate).format("MMM Do YYYY"); // Esta linea llevarla al modelo
    returnObject.mostReaded = req.middleware.footer.mostReaded;
    returnObject.lastAdded = req.middleware.footer.lastAdded;
    returnObject.view = 'article';
    res.render('layout', returnObject);
  });
};

/**
@jsDoc
@description: Get One
@params: req - Express request object
@params: res - Express response object
@response: Array with all documents in database
*/
module.exports.renderSearchResult = function(req, res) {
  Articles.findByTag(req.params.tag).then(function(result) {
    res.render('layout', {
      view: 'searchResult',
      tag: req.params.tag,
      articles: result,
      mostReaded: req.middleware.footer.mostReaded,
      lastAdded: req.middleware.footer.lastAdded
    });
  });
};

/**
@jsDoc
@description: Get One
@params: req - Express request object
@params: res - Express response object
@response: Array with all documents in database
*/
module.exports.renderWhy = function(req, res) {
  res.render('layout', {
    view: 'why',
    mostReaded: req.middleware.footer.mostReaded,
    lastAdded: req.middleware.footer.lastAdded
  });
};

/**
@jsDoc
@description: Get One
@params: req - Express request object
@params: res - Express response object
@response: Array with all documents in database
*/
module.exports.renderAbout = function(req, res) {
  res.render('layout', {
    view: 'about',
    mostReaded: req.middleware.footer.mostReaded,
    lastAdded: req.middleware.footer.lastAdded
  });
};

/**
@jsDoc
@description: Get One
@params: req - Express request object
@params: res - Express response object
@response: Array with all documents in database
*/
module.exports.renderRecent = function(req, res) {
  Articles.getLastN(25).then(function(result) {
    res.render('layout', {
      view: 'searchResult',
      tag: req.params.tag,
      articles: result,
      mostReaded: req.middleware.footer.mostReaded,
      lastAdded: req.middleware.footer.lastAdded
    });
  });
};

module.exports.getFooter = function(req, res) {
  res.json({
    mostReaded: req.middleware.footer.mostReaded,
    lastAdded: req.middleware.footer.lastAdded
  });
};

module.exports.notFound = function(err, req, res, next) {
  if (err) {
    console.log('Route error: ', err.stack);
    res.status(404).send('Error');
  }
};
