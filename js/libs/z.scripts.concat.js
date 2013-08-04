/**
 * scripts.js
 */
(function($) {

// your code here
  //
  $('#main > nav > ul li a').mouseover(function(){
    var bg = $(this).data('bg');
    var url = "url('./img/bg/" + bg + ".png')";
    $('#background').fadeOut(250, function(){
      $('#background').css('background',url);
      $('#background').fadeIn(500);
    });
  });
}(jQuery));
