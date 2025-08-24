$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $('.header').css({
        'max-width': '70%',
        'margin': '0 auto',
        'transition': 'max-width 0.7s ease',
        top: '15px',
        'border-radius': '10px',
        'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)'
      });
      $('.mobile-menu').css({
        'top': '80px',
        'max-width': '70%',
        'margin': '0 auto',
      });
    } else {
      $('.header').css({
        'max-width': '100%',
        'margin': '0',
        'transition': 'max-width 0.7s ease',
        top: '0',
        'box-shadow': 'none',
      });
      $('.mobile-menu').css({
        'top': '60px',
        'max-width': '100%',
        'margin': '0',
      });
    }
  });

  $('.menu-icon').click(function () {
    $(this).find('i').toggleClass('fa-times fa-bars');
    $('.mobile-menu').slideToggle();
  });

  $('.nav-links').click(function() {
    $('.mobile-menu').slideUp();
    $('.menu-icon i').removeClass('fa-times').addClass('fa-bars');
  })

});