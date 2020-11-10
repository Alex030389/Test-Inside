let button = document.querySelectorAll('button');
if(button) {
  for(let i = 0; i < button.length; i++) {
    button[i].addEventListener('mouseup', function() {
      this.blur();
    })
  }
}