$(document).ready(function() {
  $("#tweet-text").on('input',function(){
    let characterCounter = 140 - $(this).val().length;
    $('.counter').text(characterCounter)
    if (characterCounter < 0) {
      $('.counter').css('color','red');
    } else {
      $('.counter').css('color','black');
    }
  });
});
