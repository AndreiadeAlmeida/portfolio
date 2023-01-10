$(document).ready(function(){
  // sticky navbar
  var yourNavigation = $(".navbar");
  var stickyDiv = "sticky";
  var yourHeader = $('#home').outerHeight();

  var fadeElem = $('.fade-scroll');

  $(document).scroll(function() {
    if( $(this).scrollTop() > yourHeader) {
      yourNavigation.addClass("sticky");
    } else {
      yourNavigation.removeClass("sticky");
    }

    //fade in
    $('.fade-scroll').each( function(i){
      var bottomObject = $(this).position().top + $(this).outerHeight();
      var bottomWindow = $(window).scrollTop() + $(window).height();

      if(bottomWindow > bottomObject){
        $(this).animate({'opacity':'1'}, 1000);
      }
  });

  });

  //smooth scrolling

  var $root = $('html, body');
    $(".navbar a[href='#home'], a[href='#about'], a[href='#portfolio'], a[href='#contact']").on('click', function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
      window.location.hash = href;
      });
    }
  return false;
  });

// portfolio
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

// portfolio
  for (var i = 0; i < work.length; ++i){
    $('#gallery').append('\
  <div class="pictures col-lg-2 col-md-3 col-xs-6">\
    <a data-fancybox="gallery" href= "' + work[i].link + '"class="work-img">\
    <img class="img-responsive workpic fade-scroll" src="' + work[i].pic + '">\
    </a>\
  </div>\
    ');

  };

});
