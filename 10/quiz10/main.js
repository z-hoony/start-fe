const avg = require('./avg');
const random = require('./random');

console.log(avg(1, 2, 3, 4));
console.log(avg(1, 2));
console.log(avg(1, 2, 3, 4, 5, 6));
console.log(avg(1, 'a', 2));
console.log(avg([1, 2, 3]));

console.log(random(100, 200));
console.log(random(1, 'sd'));
console.log(random(5));
