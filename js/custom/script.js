/**
 * scripts.js
 */
(function($) {

  // Hide Body
  var height = window.innerHeight;
  $('body').css({'overflow': 'hidden', 'height': height});
  // $('#detail').css('top', height + 10);
  // Code to change background on Hover
  // $('#main > nav > ul li a').mouseover(function(){
  $('li a').mouseover(function(){
    var url = "white";
    if($(this).data('bg')){
      var bg = $(this).data('bg');
      url = "url('./img/bg/" + bg + "')";
    }
    // else{
    //   url = "white";
    // }
      $('#background').fadeOut(250, function(){
        $('#background').css({'background' : url, 'background-size' : 'cover'});
        $('#background').fadeIn(500);
      });
  });

  //Code to Reveal Section
  $('#main > nav > ul li a').click(function(){
    var section = "#" + $(this).data('navsection');
    $(section).fadeIn(250);
  });

  //Code to Reveal Work Detail
  $('#work > ol li a').click(function(){
    $('#background').css('background', "white");
    $('body').css('overflow','visible');
    $('#detail').fadeIn(0);
    $('#detail').animate({
      top: 0
    }, 500, "linear");
  });

 $('#close').click(function(){
   $('#detail').animate({
     top: 2000
    }, 500, "linear", function(){$('body').css('overflow','hidden');});
 });

}(jQuery));
