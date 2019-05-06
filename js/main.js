(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
})(jQuery);

$(document).ready(function() {
    $('#lightSlider, #lightSlider2').lightSlider({
        item:1,
        loop:true,
        pager: false,
        controls: false,
        autoplay: true,
    }); 
  });