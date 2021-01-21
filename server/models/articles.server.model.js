'use strict';
// http://mongodb.github.io/node-mongodb-native/3.3/reference/ecmascriptnext/crud/
const db = require(process.env.BASE_PATH + '/framework/dbclient');
const ObjectID = require('mongodb').ObjectID;

const Articles = function() {

  const model = {
    getAll: getAll,
    getFooter: getFooter,
    getLastN: getLastN,
    getMostReadedN: getMostReadedN,
    findByTag: findByTag,
    findByName: findByName,
    vote: vote
  };

  function getAll(inputObj){
    return new Promise(function(resolve, reject) {
      db.get().collection('articles').find({visible: true}).toArray(function(err, items) {
        if (err) {
          reject(err);
        } else {
          resolve(items);
        }
      });
    });
  }

  function getLastN(n){
    return new Promise(function(resolve, reject) {
      db.get().collection('articles').find({visible: true}).limit(n).sort({revisionDate: -1}).toArray(function(err, items) {
        if (err) {
          reject(err);
        } else {
          resolve(items);
        }
      });
    });
  }

  function getMostReadedN(n){
    return new Promise(function(resolve, reject) {
      db.get().collection('articles').find(
        {visible: true},
        {
          title: true,
          fileName: true
        }
      ).limit(n).sort({readed: -1}).toArray(function(err, items) {
        if (err) {
          reject(err);
        } else {
          resolve(items);
        }
      });
    });
  }

  function findByName(fileName){

    // Increments by one the visitor counter
    db.get().collection('articles').updateOne(
      {fileName: fileName},
      { $inc: { readed: 1 } }
    );

    // Find the article document
    return db.get().collection('articles').findOne({
      fileName: fileName
    });
  }

  function getFooter(){

    let allPromises = new Array(3);
    let returnObject = {};
    const n = 4;

    // Get most readed
    allPromises[1] = model.getMostReadedN(n).then(function(mostReaded) {
      returnObject.mostReaded = mostReaded;
    });

    // Get last added
    allPromises[2] = model.getLastN(n).then(function(lastAdded) {
      returnObject.lastAdded = lastAdded;
    });

    // Return a promise
    return new Promise(function(resolve, reject) {
      Promise.all(allPromises).then(function(){
        resolve(returnObject);
      });
    });
  }

  function findByTag(tag){
    return new Promise(function(resolve, reject) {
      db.get().collection('articles').find({
        tags: tag
      }).toArray(function(err, items) {
        if (err) {
          reject(err);
        } else {
          console.log(items);
          resolve(items);
        }
      });
    });
  }

  function vote(fileName, voteType){
    return new Promise(function(resolve, reject) {
      switch (voteType) {
        case 'positive':
          db.get().collection('articles').updateOne(
            {fileName: fileName},
            { $inc: { votesPositive: 1 } }
          );
          break;

        case 'negative':
          db.get().collection('articles').updateOne(
            {fileName: fileName},
            { $inc: { votesNegative: 1 } }
          );
          break;

        default:
          reject();
      }
      resolve();
    });
  }

  return model;

};

module.exports = new Articles();
