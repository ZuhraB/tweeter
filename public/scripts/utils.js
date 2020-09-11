export function validateTweet(netText) {
  const message = $(".validate-new-tweet");
  if (netText.length === 0) {
    message.addClass("new-tweet-error-message");
    message.text("Apparently you forgot to tweet, please tweet!");
    return;
  } else if (netText.length > 140) {
    message.addClass("new-tweet-error-message");
    message.text("You have exceeded the maximum limit");
    return;
  } else {
    message.removeClass("new-tweet-error-message");
    return true;
  }
};

export function renderTweets(tweetData) {
  $('#tweets-container').empty();
  for (let tweet of tweetData) {
    const newTweet = createTweetElement(tweet)
    $('#tweets-container').prepend(newTweet);
  }
};

export function escape(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


export function createTweetElement(userData) {
  let html = `<article class="tweet">
  <header>
    <div class="photo">
      <img class="profile" src="${userData.user.avatars}" alt="${userData.user.name}"> 
        <p><h3>${userData.user.name}</h3></p>
      </div>
      <div>
        <p class="email">${userData.user.handle}</p>
      </div>
    </header>
    <div class="message">
      <p>${escape(userData.content.text)}</p>
    </div>
    <footer class="days-imgs">
      <p class="days">  ${userData.created_at} </p>
      <div>
        <img src="photos/flag-alt-solid-24.png" alt="Flag this tweet icon" role="button">
        <img src="photos/heart-solid-24.png" alt="Favourite this tweet icon" role="button">
        <img src="photos/repost-regular-24.png" alt="Repost this tweet icon" role="button"> 
      </div>
    </footer>
  </article>`
  return html;
};

export function loadTweets() {
  return $.ajax({
    url: "http://localhost:8080/tweets",
    method: "GET"
  }).then(response => {
    renderTweets(response);
  });
}