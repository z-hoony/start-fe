var $body = document.body;
var $box = document.querySelector('#box');
var pixel = 'px';
var startX = 0;
var startY = 0;

function moveBoxBy(x, y) {
    $box.style.left = $box.offsetLeft + x + pixel;
    $box.style.top = $box.offsetTop + y + pixel;
}

function mouseDownInBox(event) {
    startX = event.screenX;
    startY = event.screenY;

    $body.addEventListener('mousemove', mouseMove);
    $box.addEventListener('mouseup', mouseUpInBox);
}

function mouseMove(event) {
    var deltaX = event.screenX - startX;
    var deltaY = event.screenY - startY;
    startX = event.screenX;
    startY = event.screenY;
    moveBoxBy(deltaX, deltaY);
}

function mouseUpInBox() {
    $body.removeEventListener('mousemove', mouseMove);
    $box.removeEventListener('mouseup', mouseUpInBox);
}

$box.addEventListener('mousedown', mouseDownInBox);