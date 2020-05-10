let prevClickedIndex = 0;
const board = document.getElementById('board');

const numberOfRow = 4;
const baseID = 'point';

for (let i = 0; i < numberOfRow; i += 1) {
  for (let j = 0; j < numberOfRow; j += 1) {
    const point = document.createElement('span');
    let color;

    if ((j + i * (numberOfRow + 1)) % 2 === 0) {
      color = 'black';
    } else {
      color = 'white';
    }

    point.setAttribute('id', baseID + (j + i * numberOfRow));
    point.classList.add(color);
    board.appendChild(point);
  }
}

board.addEventListener('click', (event) => {
  const id = event.target.getAttribute('id');
  if (id.startsWith(baseID)) {
    const index = parseInt(id.substring(baseID.length), 10);
    board.children[prevClickedIndex].classList.remove('clicked');
    event.target.classList.add('clicked');
    prevClickedIndex = index;
  }
});
