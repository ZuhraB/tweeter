/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]
const createTweetElement = (userData) => {
  let html = `<article class="tweet">
  <header>
            <div class="photo">
              <img class="profile" src="${userData.user.avatars}"> 
              <p> <h3>${userData.user.name}</h3> </p>
              </div>
                <div>
                <p class="email"> ${userData.user.handle} </p>
              </div>
          </header> 
          <div class="message">
            <p>${userData.content.text}</p>
        </div>
          <footer class="days-imgs">
            <p class="days">  ${userData.created_at} </p>
            <div>
              <img src="photos/flag-alt-solid-24.png">
              <img src="photos/heart-solid-24.png">
              <img src="photos/repost-regular-24.png"> 
            </div>
          </footer>
  </article>`
  return html;
}

const renderTweets = (tweetData) => {
  for (let tweet of tweetData) {
    const newTweet = createTweetElement(tweet)
    $('#tweets-container').append(newTweet);
  }
}
$( document ).ready(function() {
  renderTweets(data);
  $(".new-tweet-form").on("submit", function(event){
   event.preventDefault()
    $.ajax({url: '/tweets' , method: 'POST', data: $(this).serialize(), success: (response) =>{
      console.log("it worked")
      console.log(response)
    }});
  });
});




