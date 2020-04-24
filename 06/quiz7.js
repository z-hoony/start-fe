const $score = document.querySelector('#point');
const $life = document.querySelector('#life');
const $bug = document.querySelector('#bug');
const $box = document.querySelector('.box');

let currentScore = 0;
let currentLife = parseInt($life.innerHTML);
let intervalHandle = null;

const pixel = 'px';

function updateScoreBy(num) {
    currentScore += num;
    $score.innerHTML = currentScore;
}

function updateLifeBy(num) {
    currentLife += num;
    $life.innerHTML = currentLife;

    if (currentLife <= 0) {
        alert('gameover');
    }
}

function changeBugPosition() {
    const widthRange = $box.clientWidth - $bug.clientWidth;
    const heightRange = $box.clientHeight - $bug.clientHeight;

    $bug.style.left = Math.random() * widthRange + pixel;
    $bug.style.top = Math.random() * heightRange + pixel;
}

function resetBugInterval() {
    if (intervalHandle) clearInterval(intervalHandle);
    changeBugPosition();
    intervalHandle = setInterval(changeBugPosition, 1000);
}

function bugClick(event) {
    updateScoreBy(1);
    resetBugInterval();

    event.stopPropagation();
}

function boxClick(event) {
    updateLifeBy(-1);
    resetBugInterval();
}

function addEventListeners() {
    $bug.addEventListener('click', bugClick);
    $box.addEventListener('click', boxClick);
}

addEventListeners();
resetBugInterval();