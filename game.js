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
var crystalValue1 = Math.floor(Math.random() * 11 + 1); // So if I want a number between 1-12, subtract 1 from 12, then take the difference (11) then add 1 --> it's kind of like this (12-1)+1 //leaving this global so it can generate a different number for every button
var crystalValue2 = Math.floor(Math.random() * 11 + 1);
var crystalValue3 = Math.floor(Math.random() * 11 + 1);
var crystalValue4 = Math.floor(Math.random() * 11 + 1);
var crystalTotal = 0;
var win = 0;
var loose = 0;
$("#wNumber").text(win);
$("#lNumber").text(loose);

console.log(crystalValue1);
console.log(crystalValue2);
console.log(crystalValue3);
console.log(crystalValue4);

//Now the buttons need to add up to the total

$(".oNumber").html(objective);

$("#crystal1").on("click", function crystal1() {
  crystalTotal = crystalTotal + crystalValue1;
  console.log("New total= " + crystalTotal);
  $(".tNumber").text(crystalTotal);
  gameOver();
});

$("#crystal2").on("click", function crystal2() {
  crystalTotal = crystalTotal + crystalValue2;
  console.log("New total= " + crystalTotal);
  $(".tNumber").text(crystalTotal);
  gameOver();
});

$("#crystal3").on("click", function crystal3() {
  crystalTotal = crystalTotal + crystalValue3;
  console.log("New total= " + crystalTotal);
  $(".tNumber").text(crystalTotal);
  gameOver();
});

$("#crystal4").on("click", function crystal4() {
  crystalTotal = crystalTotal + crystalValue4;
  console.log("New total= " + crystalTotal);
  $(".tNumber").text(crystalTotal);
  gameOver();
});

//Now I need to determine if the total number wins/loses the game
// Says I won once page was loaded. Maybe get rid of the function part
// No, still doesn't know it won
// I had this in the wrong spot
// Can I create the function and then call it inside another?
// Now I want the win/loose to add to their counters
// Now I need to restart the game, but keep the win/loose counters
function gameOver() {
  if (crystalTotal === objective) {
    alert("You win!"); //Use alert to keep the win/lose counters, upon restart
    win++;
    $(".wNumber").text(win);
    newgame();
    //Elses can have a conditional statment, but it needs to be else if, and dont include the else statement
  } else if (crystalTotal > objective) {
    alert("You loose!"); //Condition was met!
    loose++;
    $(".lNumber").text(loose);
    newgame();
  }
  function newgame() {
    //Reset all random numbers
    //Display new objective number
    //Reset crystalTotal, and display it
    var objective = Math.floor(Math.random() * 101 + 19);
    var crystalValue1 = Math.floor(Math.random() * 11 + 1);
    var crystalValue2 = Math.floor(Math.random() * 11 + 1);
    var crystalValue3 = Math.floor(Math.random() * 11 + 1);
    var crystalValue4 = Math.floor(Math.random() * 11 + 1);
    var crystalTotal = 0;
    $(".tNumber").text(crystalTotal);
  }
}
console.log(objective);
