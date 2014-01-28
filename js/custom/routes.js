/***********************************
 * Router
 *
 * routes for project details
************************************
/                                  */



(function () {

  var AppRouter = Backbone.Router.extend({
    routes: {
      "piq": "piq", 
      "tsi": "tsi", 
      "a4j": "a4j", 
      "vwlive": "vwlive", 
      "nike": "nike", 
      "about": "about",
      "suave": "suave",
      "*actions": "defaultRoute"
      }
  });

  var app_router = new AppRouter;
  app_router.on('route:suave', function() {
      $.get("partials/suave.html", function(data){
        $('#detail').html(data);
        $('#detail').imagesLoaded( function() {
        console.log("We're on!")
        $('body').css('overflow','visible');
        $('#detail').addClass("show");
        $('#close ul li').click(function(){
          var jumper = $(this).data('id');
          var jump = '*[data-section="' + jumper + '"]';
          $('html,body').animate({
            scrollTop: $(jump).offset().top},
            '500', function(){
          });
        });
        });
      });
    });

  app_router.on('route:piq', function() {
    $('#loading').animate({'margin-right':0},10000);
    $.get("partials/piq.html", function(data){
      $('#detail').html(data);
      $('#detail').imagesLoaded( function() {
      $('#loading').animate({'margin-right': 0},500);
      $('#loading').animate({'margin-top': -2},500,function(){
      $('#loading').css({'margin-right': 1440, 'margin-top': 0});
      });
      $('#loading').stop();
      $('body').css('overflow','visible');
      $('#detail').addClass("show");
      $('#close ul li').click(function(){
        var jumper = $(this).data('id');
        var jump = '*[data-section="' + jumper + '"]';
        $('html,body').animate({
          scrollTop: $(jump).offset().top},
          '300', function(){
        });
      });
      });
    });
  });

 app_router.on('route:nike', function() {
    $('#loading').animate({'margin-right':0},10000);
    $.get("partials/nike.html", function(data){
      $('#detail').html(data);
      $('#detail').imagesLoaded( function() {
      $('#loading').animate({'margin-right': 0},500);
      $('#loading').animate({'margin-top': -2},500,function(){
      $('#loading').css({'margin-right': 1440, 'margin-top': 0});
      });
      $('#loading').stop();
      $('body').css('overflow','visible');
      $('#detail').addClass("show");
      $('#close ul li').click(function(){
        var jumper = $(this).data('id');
        var jump = '*[data-section="' + jumper + '"]';
        $('html,body').animate({
          scrollTop: $(jump).offset().top},
          '300', function(){
        });
      });
      });
    });
  });


  app_router.on('route:vwlive', function() {
    $('#loading').animate({'margin-right':0},10000);
    $.get("partials/vwlive.html", function(data){
      $('#detail').html(data);
      $('#detail').imagesLoaded( function() {
      $('#loading').animate({'margin-right': 0},500);
      $('#loading').animate({'margin-top': -2},500,function(){
      $('#loading').css({'margin-right': 1440, 'margin-top': 0});
      });
      $('#loading').stop();
      $('body').css('overflow','visible');
      $('#detail').addClass("show");
      $('#close ul li').click(function(){
        var jumper = $(this).data('id');
        var jump = '*[data-section="' + jumper + '"]';
        $('html,body').animate({
          scrollTop: $(jump).offset().top},
          '300', function(){
        });
      });
      });
    });
  });
 
 app_router.on('route:tsi', function() {
    $('#loading').animate({'margin-right':0},10000);
    $.get("partials/tsi.html", function(data){
      $('#detail').html(data);
      $('#detail').imagesLoaded( function() {
      $('#loading').animate({'margin-right': 0},500);
      $('#loading').animate({'margin-top': -2},500,function(){
      $('#loading').css({'margin-right': 1440, 'margin-top': 0});
      });
      $('#loading').stop();
      $('body').css('overflow','visible');
      $('#detail').addClass("show");
      $('#close ul li').click(function(){
        var jumper = $(this).data('id');
        var jump = '*[data-section="' + jumper + '"]';
        $('html,body').animate({
          scrollTop: $(jump).offset().top},
          '300', function(){
        });
      });
      });
    });
  });

 app_router.on('route:a4j', function() {
    $('#loading').animate({'margin-right':0},10000);
    $.get("partials/a4j.html", function(data){
      $('#detail').html(data);
      $('#detail').imagesLoaded( function() {
      $('#loading').animate({'margin-right': 0},500);
      $('#loading').animate({'margin-top': -2},500,function(){
      $('#loading').css({'margin-right': 1440, 'margin-top': 0});
      });
      $('#loading').stop();
      $('body').css('overflow','visible');
      $('#detail').addClass("show");
      $('#close ul li').click(function(){
        var jumper = $(this).data('id');
        var jump = '*[data-section="' + jumper + '"]';
        $('html,body').animate({
          scrollTop: $(jump).offset().top},
          '300', function(){
        });
      });
      });
    });
  });

   app_router.on('route:suave', function() {
    $('#loading').animate({'margin-right':0},10000);
    $.get("partials/suave.html", function(data){
      $('#detail').html(data);
      $('#detail').imagesLoaded( function() {
      $('#loading').animate({'margin-right': 0},500);
      $('#loading').animate({'margin-top': -2},500,function(){
      $('#loading').css({'margin-right': 1440, 'margin-top': 0});
      });
      $('#loading').stop();
      $('body').css('overflow','visible');
      $('#detail').addClass("show");
      $('#close ul li').click(function(){
        var jumper = $(this).data('id');
        var jump = '*[data-section="' + jumper + '"]';
        $('html,body').animate({
          scrollTop: $(jump).offset().top},
          '300', function(){
        });
      });
      });
    });
  });


 app_router.on('route:about', function() {
    $('#loading').animate({'margin-right':0},10000);
    $.get("partials/about.html", function(data){
      $('#detail').html(data);
      $('#detail').imagesLoaded( function() {
      $('#loading').animate({'margin-right': 0},500);
      $('#loading').animate({'margin-top': -2},500,function(){
      $('#loading').css({'margin-right': 1440, 'margin-top': 0});
      });
      $('#loading').stop();
      $('body').css('overflow','visible');
      $('#detail').addClass("show");
      $('#close ul li').click(function(){
        var jumper = $(this).data('id');
        var jump = '*[data-section="' + jumper + '"]';
        $('html,body').animate({
          scrollTop: $(jump).offset().top},
          '300', function(){
        });
      });
      });
    });
  });
 
  app_router.on('route:defaultRoute', function() {
    $('#detail').html("");
    if ($('#detail').hasClass("show")) $('#detail').removeClass("show");
    $('body').css('overflow','hidden');
    // $('#detail').addClass("show");
  });

  Backbone.history.start();

})();
