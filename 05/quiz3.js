const $body = document.body;
const $addRedBtn = document.querySelector('.add-red');
const $addBtn = document.querySelector('.add-btn');
const $deleteBtn = document.querySelector('.delete-btn');
const $textBtn = document.querySelector('.text-btn');
const $textInput = document.querySelector('.txt');
const $resetBtn = document.querySelector('.reset-btn');
const $toggleBtn = document.querySelector('.toggle-btn');
const $imageBtn = document.querySelector('.image-btn');

const clickEventName = 'click';
const boxClassName = 'box';
const redClassName = 'red';
const hiddenStyle = 'display: none;';
const imageURL = 'https://i.imgur.com/69NjYBH.png';

let isHidden = false;

function getAllBoxes() {
  const $boxes = document.querySelectorAll(`.${boxClassName}`);
  return $boxes;
}

// 문제 1
function addRedClassToAllBoxes() {
  const addClass = ($box) => {
    $box.classList.add(redClassName);
  };
  getAllBoxes().forEach(addClass);
}

// 문제 2
function createBox() {
  const $box = document.createElement('div');
  $box.classList.add(boxClassName);

  if (isHidden) {
    $box.setAttribute('style', hiddenStyle);
  }

  return $box;
}

function addBox() {
  const $box = createBox();
  $body.appendChild($box);
}

// 문제 3
function removeBox() {
  const $boxes = getAllBoxes();
  const $lastBox = $boxes.item($boxes.length - 1);

  if ($lastBox) {
    $lastBox.remove();
  }
}

// 문제 4
function setTextToAllBoxes() {
  const text = $textInput.value;

  getAllBoxes().forEach(($box) => {
    // eslint-disable-next-line no-param-reassign
    const $text = document.createTextNode(text);
    $box.appendChild($text);
  });
}

// 문제 5
function removeAllBoxes() {
  getAllBoxes().forEach(($box) => {
    $box.remove();
  });
}

// 문제 6
function toggleAllBoxes() {
  isHidden = !isHidden;

  getAllBoxes().forEach(($box) => {
    const style = isHidden ? hiddenStyle : '';
    // eslint-disable-next-line no-param-reassign
    $box.style = style;
  });
}

// 문제 7
function showImage() {
  const $boxes = getAllBoxes();
  if ($boxes.length === 0) {
    addBox();
  }

  getAllBoxes().forEach(($box) => {
    const $img = document.createElement('img');
    $img.src = imageURL;
    $box.append($img);
  });
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
