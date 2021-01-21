'use strict';
const db = require(process.env.BASE_PATH + '/framework/dbclient');
const dictionary = require('./dictionary.model');
const fs = require('fs');
const moment = require('moment');
const readingTime = require('reading-time');
const ObjectID = require('mongodb').ObjectID;

const Fixtures = function() {

  const model = {
    run: run
  };

  function run(){
    // Update the article on the DB
    dictionary.forEach(function(article, index){

      if(!article.visible){
        return false;
      }

      // Read associated file
      const pathFile = process.env.VIEWS_PATH + '/articles/' + article.fileName + '.md';
      const text = fs.readFileSync(pathFile, 'utf8');
      const readingTimeResult = readingTime(article.title + ' ' + article.conclusion + ' ' + text);

      // Insert in DB
      db.get().collection('articles').update({
        fileName: article.fileName
      },{
        $set: {
          // fileName:
          visible: article.visible,
          fileName: article.fileName,
          title: article.title,
          conclusion: article.conclusion,
          tags: article.tags,
          author: article.author,
          revisionDate: new Date(),
          relatedArticles: article.relatedArticles,
          continueReading: article.continueReading,
          readingTimeText: readingTimeResult.text
          // readed
          // votesPositive
          // voresNegative
        }
      },{
        upsert: true
      }); // update
    }); // dictionary
    /*
    return new Promise(function(resolve, reject) {
      // Delete all documents in database
      db.get().collection('articles').count().then(function(resultCount){

        if(resultCount){
          resolve();
          return false;
        }

        // Read articles in fixtures
        dictionary.forEach(function(article, index){
          // Read associated file
          const pathFile = environment.viewsPath + '/articles/' + article.fileName + '.md';
          const text = fs.readFileSync(pathFile, 'utf8');
          const readingTimeResult = readingTime(article.title + ' ' + article.conclusion + ' ' + text);

          // Insert data in the DB
          db.get().collection('articles').insertOne({
            visible: article.visible,
            fileName: article.fileName,
            title: article.title,
            conclusion: article.conclusion,
            tags: article.tags,
            author: article.author,
            revisionDate: article.revisionDate,
            relatedArticles: article.relatedArticles,
            continueReading: article.continueReading,
            readingTimeText: readingTimeResult.text,
            readed: 0
          });

        });
      });
    });
    */
  }

  return model;

};

module.exports = new Fixtures();
