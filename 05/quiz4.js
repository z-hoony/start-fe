var $body = document.body;
var $box = document.querySelector('#box');
var isDragging = false;
var pixel = 'px';
var startX = 0;
var startY = 0;

function moveBoxBy(x, y) {
    $box.style.left = $box.offsetLeft + x + pixel;
    $box.style.top = $box.offsetTop + y + pixel;
}

function mouseDownInBox(event) {
    isDragging = true;
    startX = event.screenX;
    startY = event.screenY;
}

function mouseMove(event) {
    if (isDragging) {
        var deltaX = event.screenX - startX;
        var deltaY = event.screenY - startY;
        startX = event.screenX;
        startY = event.screenY;
        moveBoxBy(deltaX, deltaY);
    }
}

function mouseUpInBox() {
    isDragging = false;
}

function addEventListeners() {
    $box.addEventListener('mousedown', mouseDownInBox);
    $body.addEventListener('mousemove', mouseMove);
    $box.addEventListener('mouseup', mouseUpInBox);
}

addEventListeners();