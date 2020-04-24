const $boxes = document.querySelectorAll('.box');

let $clickedBox = null;
let clickedBoxOffset = {x: 0, y: 0};

const pixel = 'px';

function boxClick(event) {
    $clickedBox = event.target;

    clickedBoxOffset.x = event.clientX - $clickedBox.offsetLeft;
    clickedBoxOffset.y = event.clientY - $clickedBox.offsetTop;
}

function boxUnClick(event) {
    $clickedBox = null;
}

function mouseMove(event) {
    if (!$clickedBox) return;

    $clickedBox.style.left = event.clientX - clickedBoxOffset.x + pixel;
    $clickedBox.style.top = event.clientY - clickedBoxOffset.y + pixel;
}

function addEventListeners() {
    $boxes.forEach($box => {
        $box.addEventListener('mousedown', boxClick);
        $box.addEventListener('mouseup', boxUnClick);
    });
    
    document.body.addEventListener('mousemove', mouseMove);
}

addEventListeners();
