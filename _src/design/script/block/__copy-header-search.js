function copyHeaderSearch() {
  if($('[data-m-btn="search"]').is(':visible')) {
    $('[data-el="header__m-search"]').prepend($('[data-el="header__search"]').detach());
  } else {
    $('.header__logo').after($('[data-el="header__search"]').detach());
  }

  $('.header__m-search .header__search').removeClass('d-lg-none');
}

copyHeaderSearch();

$(window).on('resize', function() {
  copyHeaderSearch();
})
