/**
 * scripts.js
 */
(function($) {

  var data ={
    "about" : "<img src='/img/resume.png' />",
    "sample" : "<h1>We walked into a party one day, and the music sucked.</h1><img src='/img/portfolio/piq/piq-header.jpg' width='100%'/><h2>Subhead</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"};

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
      $('#background').fadeOut(500, function(){
        $('#background').css({'background' : url, 'background-size' : 'cover'});
        $('#background').fadeIn(1000);
      });
  });

  //Code to Reveal Section
  $('#main > nav > ul li a').click(function(){
    if($(this).data('navsection') === "work"){
      var section = "#" + $(this).data('navsection');
      $(section).fadeIn(250);
    }
    // else if($(this).data('navsection' === "about"){
    //   $('#background').css('background', "white");
    //   $('body').css('overflow','visible');
    //   $('#detail').html(data.about);
    //   $('#detail').fadeIn(0);
    //   $('#detail').animate({
    //     top: 0
    //   }, 500, "linear");
    // }
  });

  //Code to Reveal Work Detail
  $('#work > ol li a').click(function(){
    $('#background').css('background', "white");
    $('body').css('overflow','visible');
    // $('#detail div').html(data.sample);
    $('#detail').fadeIn(0);
    $('#detail').animate({
      top: 60
    }, 500, "linear");
  });

   
 
  // Jumper
 
  $('#close ul li').click(function(){
    var jumper = $(this).data('id');
    if (jumper === "close"){
     // $('#detail').animate({
     //   scrollTop: $('html').offset().top,
     //   top: 2000
     // }, 500, "linear", function(){$('body').css('overflow','hidden');});
      $('html,body').animate({
        scrollTop: $('body').offset().top},
        '500');
     $('#detail').animate({
       scrollTop: $('html').offset().top,
       top: 2000
     }, 500, "linear", function(){$('body').css('overflow','hidden');});
    // }); 
    }else{
    var jump = '*[data-section="' + jumper + '"]';
    $('html,body').animate({
        scrollTop: $(jump).offset().top},
        '500', function(){
    });
    }
  });

 
}(jQuery));
