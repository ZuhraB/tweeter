/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

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
            <p>${escape(userData.content.text)}</p>
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
  $('#tweets-container').empty()
  for (let tweet of tweetData) {
    const newTweet = createTweetElement(tweet)
    $('#tweets-container').prepend(newTweet);
  }
}
$( document ).ready(function() {
  $(".new-tweet-form").on("submit", function(event){
   event.preventDefault();
   const tweetText = $("#tweet-text").val()
   if (tweetText.length > 0 && tweetText.length <= 140) {
     $.ajax({url: '/tweets' , method: 'POST', data: $(this).serialize()}).then(response =>{
       loadTweets();
     }).catch(e => {
       alert("Somthing went wrong!!")
     })
  } else if (tweetText.length > 140) {
    alert ("You just hit the maximum limit!!!")
  } else {
    alert ("Please tweet!!")
  }
  });
  const loadTweets = () => {
    $.ajax({url: ' http://localhost:8080/tweets' , method: 'GET'}).then(response =>{
      renderTweets(response)
      })
  }
  loadTweets();
});





