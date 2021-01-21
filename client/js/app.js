document.addEventListener('DOMContentLoaded', () => {

  // Analyze the current blog page
  isAnArticle = document.URL.indexOf('/article/') > 0;

  // Add listers to buttons
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
