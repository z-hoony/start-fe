var prevClickedIndex = 0;
var board = document.getElementById("board");

var numberOfRow = 4;
var baseID = 'point';

for(var i=0; i<numberOfRow; i++){
    for(var j=0; j<numberOfRow; j++) {
        var point = document.createElement('span');
        var color

        if ((j + (i * (numberOfRow + 1))) % 2 == 0) {
            color = 'black';
        } else {
            color = 'white';
        }

        point.setAttribute('id', baseID+(j + (i * 4)));
        point.classList.add(color);
        board.appendChild(point);
    }
}

board.addEventListener('click', function(event) {
    var id = event.target.getAttribute('id');
    if (id.startsWith(baseID)) {
        var index = parseInt(id.substring(baseID.length));
        board.children[prevClickedIndex].classList.remove('clicked');
        event.target.classList.add('clicked');
        prevClickedIndex = index;
    }
})