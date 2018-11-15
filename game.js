/*
    Generate a random number for each button (4)
    
*/

/*function c(a, b) {
  a + b;
}

console.log(c(1, 2)); //undefined

var f = c(1, 2); //undefined
console.log(f);

function d(a, b) {
  return a + b;
}

console.log(d(1, 2));

f = d(1, 2);
console.log(f);
*/

var objective = Math.floor(Math.random() * 101 + 19); //In order to get a number between 19 and 120, we need find the difference between the two, then add 19. This sets the range.

var crystal1 = Math.floor(Math.random() * 11 + 1); // So if I want a number between 1-12, subtract 1 from 12, then take the difference (11) then add 1 --> it's kind of like this (12-1)+1
var crystal2 = Math.floor(Math.random() * 11 + 1);
var crystal3 = Math.floor(Math.random() * 11 + 1);
var crystal4 = Math.floor(Math.random() * 11 + 1);

$(".oNumber").html(objective);

console.log(objective);
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);
