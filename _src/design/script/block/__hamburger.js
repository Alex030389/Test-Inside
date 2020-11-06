$('[data-m-btn="open"]').on('click', function() {
  openMNav();
});

$('[data-m-btn="close"]').on('click', function() {
  closeMNav();
});

$(window).on('resize', function() {
  if($('[data-el="header__sign-in"]').is(':visible')) {
    $('[data-el="header__nav"]').show();
    $('body').css({"overflow-y": "auto"});
  } else {
    $('[data-el="header__nav"]').attr('style', '')
  }
});

function openMNav() {
  $('[data-el="header__nav"]').fadeIn(150);
  $('body').css({"overflow-y": "hidden"});
}

function closeMNav() {
  $('[data-el="header__nav"]').fadeOut(150);
  $('body').css({"overflow-y": "auto"});
}