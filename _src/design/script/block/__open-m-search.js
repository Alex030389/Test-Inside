$('[data-m-btn="search"]').on('click', function() {
  $('[data-el="m-search-wrap"]').slideToggle(150);
  $('.header__search-control').trigger('focus');
});

$(window).on('resize', function() {
  if($('[data-m-btn="search"]').is(':hidden')) {
    $('[data-el="m-search-wrap"]').hide();
  }
});