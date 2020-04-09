console.log(window.outerWidth);
console.log(window.name);

// window.open('http://www.daum.net');

// location.href = 'http://www.daum.net';

// location.reload();

// history.back();

console.log(screen.width);
console.log(screen.height);

console.log(navigator.userAgent);

var debug = document.querySelector('#debug');
console.log(debug);

var box = document.querySelector('.box');
var box2 = document.querySelectorAll('.box');

console.log(box2);

var div = document.createElement('div');
// console.log(div);

div.style.border = '1px solid #000';
div.innerHTML = 'hello!';

document.body.appendChild(div);


var span = document.createElement('span');
var hello = document.createTextNode('hello');
span.appendChild(hello);
document.body.appendChild(span);


var debug = document.getElementById('debug');
debug.remove();


var list = document.getElementById('list');
list.removeChild(list.children[0]);



span.addEventListener('click', function() {
    console.log('click');
});


var clickCount = 0;
function popup(event) {
    console.log(++clickCount);
    console.log(arguments, this, event, event.type, event.currentTarget);
}
document.body.addEventListener('click', popup);


var list = document.querySelector('#list');
for (var i = 0; i < list.children.length; i++) {
    list.children[i].addEventListener('click', function() {
        console.log(1);
    })
}

var app = document.getElementById('list');
app.addEventListener('click', function(event) {
    if (event.target.nodeName === 'LI') {
        console.log(2);
        event.stopPropagation();
    }
})

 
