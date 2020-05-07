const $numInput = document.querySelector('#num');
const $printButton = document.querySelector('#btn');
const $result = document.querySelector('#result');

function getNumber() {
  return parseInt($numInput.value);
}

function makeGugudanString(num) {
  let result = '';
  for (let i = 1; i < 10; i++) {
    result += `${num} x ${i} = ${num * i}<br>`;
  }

  return result;
}

function printString(string) {
  $result.innerHTML = string;
}

function showGugudan() {
  const num = getNumber();

  if (num) {
    let result = makeGugudanString(num);
    printString(result);
  } else {
    alert('숫자를 입력해주세요');
  }
}

$printButton.addEventListener('click', showGugudan);
