$(document).ready(function() {

  var contactLink = $("a:contains('Contact')");
  var emailIcon = $("img[src='images/mail.png']");
  var emailField = $("span:contains('contact@erikgriffin.io')");

  var setFontSize = function() {
    var viewportWidth = $(window).width();
    var fontSize = Math.sqrt(viewportWidth/250);
    $('.boxed').css('font-size',fontSize+'em');
  };

  $(window).resize(function() {
    setFontSize();
  });

  setFontSize();

  emailIcon.click(function() {
    emailField.removeAttr('hidden');
    emailField.addClass('animated bounceIn');
    emailField.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      emailField.removeClass('animated bounceIn');
    });
  });



  contactLink.click(function() {
    $.fn.fullpage.moveSectionDown();
  });

  $('#fullpage').fullpage({
    continuousVertical:true,
    verticalCentered: false,
    navigation:false,
    animateAnchor: true,
    scrollOverflow: false,
    menu:false,
    recordHistory: false,
    autoScrolling: true,
    fitToSection:false,
    scrollingSpeed: 1000
  });

});
