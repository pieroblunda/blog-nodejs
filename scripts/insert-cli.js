// https://www.npmjs.com/package/prompt
const environment = require('../server/environment');
const dbclient = require('../server/dbclient');
const db = require(environment.serverPath + '/dbclient');
const fs = require('fs');
const prompt = require('prompt');
const readingTime = require('reading-time');
const schema = {
  properties: {
    fileName: {
      pattern: /^[a-zA-Z\-]+$/,
      message: 'Must be only letters, or dashes',
      required: true
    },
    title: {
      pattern: /^[a-zA-Z\s\@\-]+$/,
      message: 'Must be only letters, spaces, "@", or dashes',
      required: true
    },
    description: {
      pattern: /^[a-zA-Z\-\s\.]+$/,
      message: 'Must be only letters, "-", spaces or "."',
      required: true
    },
    conclusion: {
      pattern: /^[a-zA-Z\-\s\.]+$/,
      message: 'Must be only letters, "-", spaces or "."',
      required: true
    },
    author: {
      pattern: /^(pieroblunda|juanpelota)$/,
      message: 'Must be <pieroblunda> or <juanpelota>',
      required: true,
      default: 'pieroblunda'
    },
    tags: {
      description: 'Tags (Ctrl+C to exit)',
      message: 'Must be <pieroblunda> or <juanpelota>',
      type: 'array',
      required: true,
      minItems: 1
    },
    relatedArticles: {
      description: 'relatedArticles (Ctrl+C to exit)',
      message: 'Must be <pieroblunda> or <juanpelota>',
      type: 'array',
      required: true,
      minItems: 1
    },
    continueReading: {
      description: 'continueReading (Ctrl+C to exit)',
      message: 'Must be <pieroblunda> or <juanpelota>',
      type: 'array',
      required: true,
      minItems: 1
    }
  }
};

prompt.start().get(schema, function (err, article) {

    // Validate errors
    if (err) { return onErr(err); }

    // Create the article file
    fs.writeFileSync(environment.viewsPath + '/articles/' + article.fileName + '.md', "synchronous write!");

    // Read associated file
    const pathFile = environment.viewsPath + '/articles/' + article.fileName + '.md';
    const text = fs.readFileSync(pathFile, 'utf8');
    const readingTimeResult = readingTime(article.title + ' ' + article.conclusion + ' ' + text);

    // Default values
    article.revisionDate = new Date();

    // Replace in menu
    var viewfile = environment.viewsPath + '/partial.article.pug';
    fs.readFile(viewfile, 'utf8', function (err,data) {
      if (err) return console.log(err);

      var result = data.replace(/\/\/-\s@NewArticleHere/gm, `    when '${article.fileName}'\n      include:markdown-it articles/${article.fileName}.md\n//- @NewArticleHere`);
      fs.writeFileSync(viewfile, result, 'utf8', function (err) {
         if (err) return console.log(err);
      });
    });

    // Replace in menu
    var modelfile = environment.serverPath + '/models/dictionary.model.js';
    console.log(modelfile);
    fs.readFile(modelfile, 'utf8', function (err,data) {
      if (err) return console.log(err);

      var result = data.replace(/\/\/-\s@NewArticleHere/gm, `,${JSON.stringify(article, null, 2)}//- @NewArticleHere`);
      result = result.replace(/^\s+"(fileName|title|conclusion|author|tags|relatedArticles|continueReading|revisionDate)":/gm, '    $1:');
      result = result.replace(/^\s+("[\s\S]*?",?)$/gm, '      $1');
      result = result.replace(/^\s+\],$/gm, '    ],');
      result = result.replace(/^(}\/\/-\s@NewArticleHere)$/gm, '  $1');
      result = result.replace(/"/gm, '\'');
      fs.writeFileSync(modelfile, result, 'utf8', function (err) {
         if (err) return console.log(err);
      });
    });

    prompt.stop();

});

function onErr(err) {
    console.log(err);
    return 1;
}
