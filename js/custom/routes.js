/***********************************
 * Router
 *
 * routes for project details
 "donext": "donext",
************************************
/                                  */



(function () {

  var AppRouter = Backbone.Router.extend({
    routes: {
      "piq": "piq",
      "tsi": "tsi",
      "today": "donext",
      "intro": "intro",
      "a4j": "a4j",
      "vwlive": "vwlive",
      "nike": "nike",
      "about": "about",
      "currently": "currently",
      "suave": "suave",
      "*actions": "defaultRoute"
      }
  });

  var app_router = new AppRouter;
  app_router.on('route:suave', function() {
      $.get("partials/suave.html", function(data){
        $('#detail').html(data);
        mixpanel.track("Portfolio: Suave");
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
      mixpanel.track("Portfolio: piq");
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

  app_router.on('route:intro', function() {
    $('#loading').animate({'margin-right':0},10000);
    $.get("partials/intro.html", function(data){
      $('#detail').html(data);
      mixpanel.track("Portfolio: Intro");
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


  app_router.on('route:donext', function() {
    $('#loading').animate({'margin-right':0},10000);
    $.get("partials/donext.html", function(data){
      $('#detail').html(data);
      mixpanel.track("Portfolio: DoNext");
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
      mixpanel.track("Portfolio: Nike");
      $('#detail').imagesLoaded( function() {
      $('.spinner').fadeOut(150);
      // $('#loading').animate({'margin-right': 0},500);
      // $('#loading').animate({'margin-top': -2},500,function(){
      // $('#loading').css({'margin-right': 1440, 'margin-top': 0});
      // });
      // $('#loading').stop();
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
      mixpanel.track("Portfolio: VW Live");
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
      mixpanel.track("Portfolio: TSI Test Drive");
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
      mixpanel.track("Portfolio: anything4jetta");
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
      mixpanel.track("Portfolio: Suave");
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
      mixpanel.track("About");
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

  app_router.on('route:currently', function() {
    $('#loading').animate({'margin-right':0},10000);
    $.get("partials/currently.html", function(data){
      $('#detail').html(data);
      mixpanel.track("Portfolio: Currently");
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
