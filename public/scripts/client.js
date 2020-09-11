import {
  validateTweet,
  loadTweets
} from "./utils.js";

$(document).ready(function () {
  const $form = $(".new-tweet-form");
  $form.on("submit", function (event) {
    event.preventDefault();
    const tweetText = $("#tweet-text").val();
    if (validateTweet(tweetText)) {
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: $(this).serialize()
      }).then(() => {
        return loadTweets();
      }).catch(error => {
        alert("Somthing went wrong!!");
        console.error(error);
      });
    }
  });

  loadTweets();
});