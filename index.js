document.onmousemove = function (e) {
  let coorX = (e.clientX / 50);
  let container = $('.throne');
  let coorY = (e.clientY / 50);
  $('.throne').css('transform', 'perspective(700px) translate3d(' + coorX + 'px, ' + coorY + 'px, 0px)')
}