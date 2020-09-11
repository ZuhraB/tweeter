$(document).ready(function () {
  const $counter = $(".counter");
  const $tweetTextInput = $("#tweet-text");
  const MAX_CHARACTER_COUNT = 140;
  $tweetTextInput.on("input", function () {
    const characterCounter = MAX_CHARACTER_COUNT - $(this).val().length;
    $counter.text(characterCounter);
    if (characterCounter < 0) {
      $counter.css("color", "red");
    } else {
      $counter.css("color", "black");
    }
  });
});