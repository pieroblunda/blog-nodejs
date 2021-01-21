'use strict';
const articlesController = require('./controllers/articles.server.controller'),
      layoutController = require('./controllers/layout.server.controller'),
      middleware = require('./middlewares/footer-data');

module.exports.init = function(app) {

  app.get('/', middleware.getFooter, layoutController.renderRecent);
  app.get('/why', middleware.getFooter, layoutController.renderWhy);
  app.get('/about', middleware.getFooter, layoutController.renderAbout);
  app.get('/recent', middleware.getFooter, layoutController.renderRecent);
  app.get('/articles', middleware.getFooter, layoutController.renderArticles);
  app.get('/article/:title', middleware.getFooter, layoutController.renderArticle);
  app.get('/tag/:tag', layoutController.renderSearchResult);

  app.get('/api/articles/getAll', articlesController.getAll);
  app.get('/api/articles/getLastN/:n', articlesController.getLastN);
  app.get('/api/articles/getMostReadedN/:n', articlesController.getMostReadedN);
  app.get('/api/articles/findByName/:title', articlesController.findByName);
  app.get('/api/articles/findByTag/:tag', articlesController.findByTag);
  app.post('/api/articles/vote/:fileName/:voteType', articlesController.vote)

  app.get('/api/layout/getFooter', middleware.getFooter, layoutController.getFooter);

};
