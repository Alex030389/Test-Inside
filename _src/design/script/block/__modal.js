$('[data-btn="modal"]').magnificPopup({
  type:'inline',
  showCloseBtn:false
});

$('.modal__btn-close').on('click',function(){
  $.magnificPopup.close();
});