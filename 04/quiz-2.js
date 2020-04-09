var prevClickedIndex = 0;
var board = document.getElementById("board");

for(var i=0; i<4; i++){
    for(var j=0; j<4; j++) {
        var point = document.createElement('span');
        var color

        if ((j + (i * 5)) % 2 == 0) {
            color = 'black';
        } else {
            color = 'white';
        }

        point.setAttribute('id', 'point'+(j + (i * 4)));
        point.classList.add(color);
        board.appendChild(point);
    }
}

board.addEventListener('click', function(event) {
    var id = event.target.getAttribute('id');
    if (id.startsWith('point')) {
        var index = parseInt(id.substring(5));
        board.children[prevClickedIndex].classList.remove('clicked');
        event.target.classList.add('clicked');
        prevClickedIndex = index;
    }
})