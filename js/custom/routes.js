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
      "*actions": "defaultRoute"
      }
  });

  var app_router = new AppRouter;

  app_router.on('route:piq', function() {
    $.get("partials/piq.html", function(data){
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

  app_router.on('route:nike', function() {
    $.get("partials/nike.html", function(data){
      $('#detail').html(data);
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


  app_router.on('route:vwlive', function() {
    $.get("partials/vwlive.html", function(data){
      $('#detail').html(data);
      $('#detail').addClass("show");
      $('body').css('overflow','visible');

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


  app_router.on('route:tsi', function() {
    $.get("partials/tsi.html", function(data){
      $('#detail').html(data);
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

  app_router.on('route:a4j', function() {
    $.get("partials/a4j.html", function(data){
      $('#detail').html(data);
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

  app_router.on('route:about', function() {
    $.get("partials/about.html", function(data){
      $('#detail').html(data);
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


  app_router.on('route:defaultRoute', function() {
    $('#detail').html("");
    if ($('#detail').hasClass("show")) $('#detail').removeClass("show");
    $('body').css('overflow','hidden');
    // $('#detail').addClass("show");
  });

  Backbone.history.start();

})();
