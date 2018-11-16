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
var crystalValue1 = Math.floor(Math.random() * 11 + 1); //leaving this global so it can generate a different number for every button
var crystalValue2 = Math.floor(Math.random() * 11 + 1);
var crystalValue3 = Math.floor(Math.random() * 11 + 1);
var crystalValue4 = Math.floor(Math.random() * 11 + 1);

function crystal1() {
  //var crystal1 = Math.floor(Math.random() * 11 + 1); // So if I want a number between 1-12, subtract 1 from 12, then take the difference (11) then add 1 --> it's kind of like this (12-1)+1
  crystalValue1;
  console.log(crystalValue1);
}

function crystal2() {
  crystalValue2;
  console.log(crystalValue2);
}

function crystal3() {
  crystalValue3;
  console.log(crystalValue3);
}

function crystal4() {
  crystalValue4;
  console.log(crystalValue4);
}
//Now the buttons need to add up to the total

/*var crystalTotal = function crystalTotal() {
  crystal1() + crystal2() + crystal3() + crystal4();
  console.log(crystalTotal());
};

$(".tNumber").html(crystalTotal);
*/

$(".oNumber").html(objective);

console.log(objective);
console.log(crystal);
