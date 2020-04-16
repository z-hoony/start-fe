var $body = document.body;
var $addRedBtn = document.querySelector('.add-red');
var $addBtn = document.querySelector('.add-btn');
var $deleteBtn = document.querySelector('.delete-btn');
var $textBtn = document.querySelector('.text-btn');
var $textInput = document.querySelector('.txt');
var $resetBtn = document.querySelector('.reset-btn');
var $toggleBtn = document.querySelector('.toggle-btn');
var $imageBtn = document.querySelector('.image-btn');

var clickEventName = 'click';
var boxClassName = 'box';
var redClassName = 'red';
var hiddenStyle = 'display: none;';
var imageURL = 'https://i.imgur.com/69NjYBH.png';

var isHidden = false;

function getAllBoxes() {
    var $boxes = document.querySelectorAll('.' + boxClassName);
    return $boxes;
}

// 문제 1
function addRedClassToAllBoxes() {
    getAllBoxes().forEach(function($box) {
        var className = boxClassName + ' ' + redClassName;
        $box.setAttribute('class', className);
    })
}

// 문제 2
function createBox() {
    var $box = document.createElement('div');
    $box.classList.add(boxClassName);

    if (isHidden) {
        $box.setAttribute('style', hiddenStyle);
    }

    return $box;
}

function addBox() {
    var $box = createBox();
    $body.appendChild($box);
}

// 문제 3
function removeBox() {
    var $boxes = getAllBoxes();
    if ($boxes.length > 0) {
        var $lastBox = $boxes[$boxes.length - 1];

        if ($lastBox) {
            $lastBox.remove();
        }
    }
}

// 문제 4
function setTextToAllBoxes() {
    var text = $textInput.value;

    getAllBoxes().forEach(function($box) {
        $box.innerHTML += text;
    })
}

// 문제 5
function removeAllBoxes() {
    var $boxes = document.querySelectorAll('.' + boxClassName);

    for (var i = 0; i < $boxes.length; i++) {
        var $box = $boxes[i];
        $box.remove();
    }
}

// 문제 6
function toggleAllBoxes() {
    isHidden = !isHidden;
    
    getAllBoxes().forEach(function($box) {
        var style = isHidden ? hiddenStyle : '';
        $box.style = style;
    })
}

// 문제 7
function showImage() {
    var $boxes = getAllBoxes();
    if ($boxes.length === 0) {
        addBox()
    }

    getAllBoxes().forEach(function($box) {
        var $img = document.createElement('img');
        $img.src = imageURL;
        $box.append($img);
    })
}

// 이벤트 처리
function addEvents() {
    $addRedBtn.addEventListener(clickEventName, addRedClassToAllBoxes);
    $addBtn.addEventListener(clickEventName, addBox);
    $deleteBtn.addEventListener(clickEventName, removeBox);
    $textBtn.addEventListener(clickEventName, setTextToAllBoxes);
    $resetBtn.addEventListener(clickEventName, removeAllBoxes);
    $toggleBtn.addEventListener(clickEventName, toggleAllBoxes);
    $imageBtn.addEventListener(clickEventName, showImage);
}


addEvents();