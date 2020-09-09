/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}
const createTweetElement = (userData) => {
  
  let html = `<article class="tweet">
    name: ${userData.user.name}
    avatars: ${userData.user.avatars}
    handle: ${userData.user.handle}
    created_at:${userData.created_at}
  </article>`
  return $('#tweets-container').append(html); 
}
console.log(createTweetElement(tweetData))
const $tweet = createTweetElement(tweetData);
$('#tweets-container').append($tweet); 

const renderTweets = () => {

}



