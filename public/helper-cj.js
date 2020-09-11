// Returns true if tweet length is greater than zero and less than 140.
const validateTweet =function(netText) {
  const message = $(".validate-new-tweet");
  if (netText.length === 0) {
    message.addClass("new-tweet-error-message");
    message.text("Apparently you forgot to tweet, please tweet!");
    return;
  }
  else if (netText.length > 140) {
    message.addClass("new-tweet-error-message");
    message.text("You have exceeded the maximum limit");
    return;
  }
  else {
    message.removeClass("new-tweet-error-message");
    return true;
  }

}

const renderTweets = (tweetData) => {
  $('#tweets-container').empty()
  for (let tweet of tweetData) {
    const newTweet = createTweetElement(tweet)
    $('#tweets-container').prepend(newTweet);
  }
}

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
module.exports = { validateTweet, renderTweets, escape }