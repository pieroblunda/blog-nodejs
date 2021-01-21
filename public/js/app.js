document.addEventListener('DOMContentLoaded', () => {

  // discuss
  var disqus_config = function () {
  this.page.url = 'https://pieroblunda.github.io/blog/';  // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = 'pieroblunda'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };
  (function() { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = 'https://pieroblunda.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
  })();


  // Add listers to buttons
  isAnArticle = document.URL.indexOf('/article/') > 0;
  if(isAnArticle){

    // Vote
    document.querySelectorAll('section.vote button').forEach( (element)=> {
      element.addEventListener('click', event => {
        voteArticle(event.target.getAttribute('data-vote'));
      });
    });

    // Share button
  }
});

/* Vote Article function */
let voteArticle = (voteType) => {
  const articleName = document.URL.substring(document.URL.lastIndexOf('/') + 1);
  fetch(`/api/articles/vote/${articleName}/${voteType}`, {
    method: 'post'
 }).then(() => {
   console.log('Done!');
 }).catch((error) => {
   console.log('Catch errors');
 });
};

let shareArticle = () => {
  navigator.share({
    url: document.URL,
    title: document.title
  });
};
