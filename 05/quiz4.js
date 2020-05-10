const $body = document.body;
const $box = document.querySelector('#box');
const pixel = 'px';
let startX = 0;
let startY = 0;

function moveBoxBy(x, y) {
  $box.style.left = $box.offsetLeft + x + pixel;
  $box.style.top = $box.offsetTop + y + pixel;
}

function mouseMove(event) {
  const deltaX = event.screenX - startX;
  const deltaY = event.screenY - startY;
  startX = event.screenX;
  startY = event.screenY;
  moveBoxBy(deltaX, deltaY);
}

function mouseUpInBox() {
  $body.removeEventListener('mousemove', mouseMove);
  $box.removeEventListener('mouseup', mouseUpInBox);
}

function mouseDownInBox(event) {
  startX = event.screenX;
  startY = event.screenY;

  $body.addEventListener('mousemove', mouseMove);
  $box.addEventListener('mouseup', mouseUpInBox);
}

$box.addEventListener('mousedown', mouseDownInBox);
