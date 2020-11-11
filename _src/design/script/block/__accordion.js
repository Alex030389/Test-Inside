$('[data-js="m-help__header"]').on('click', function() {
  $(this)
    .toggleClass('m-help__header_open')
    .next().slideToggle(200);
});