const $min = document.querySelector('#min');
const $max = document.querySelector('#max');
const $btn = document.querySelector('#btn');
const $box = document.querySelector('#box');

let num = 0;
let currentNum = 0;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function animate() {
  if (currentNum < num) {
    currentNum += 1;
    $box.innerHTML = currentNum;
    $btn.disabled = true;
  } else {
    $btn.disabled = false;
  }
}

function showNumber() {
  num = Math.floor(random($min.value, $max.value));
  currentNum = num - 30;
}

$btn.addEventListener('click', showNumber);
setInterval(animate, 33);
