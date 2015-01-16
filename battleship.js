
// 3 variables to hold the location of the ship. Once one is set, the value of the other two are determined
// by adding 1 to the previous one. The value of the first needs to be set randomly between locations
// 0 and 6.
var location1 = 1;
var isLocation1Valid = false;
var previousGuesses;

var guess; // a variable to hold the user's guess
var hits = 0; // a variable to hold the number of hits on locations 1, 2 or 3.
var guesses = 0; // a variable to hold the number of guesses the user has taken
var isSunk =  false; // a variable to hold whether the ship is sunk or not

while (isLocation1Valid == false) {
location1 = parseInt(prompt("Where do you want your ship located? Give the first space (between 0 and 4), and I'll figure out the rest"));
if (location1 > 4 || location1 < 0) {
alert("Location 1 has to be between 0 and 4 inclusive. Try again!"); 
} else
{ isLocation1Valid = true;
}
}

var location2 = location1 + 1;
var location3 = location2 + 1;
console.log(location2);
console.log(location3);

while (isSunk == false) {
guess = prompt("You may fire when ready, Gridley:");
if (guess < 0 || guess > 6) {
alert("Your guess must be between 1 & 6. Try again!");
} else if (guess == null){
isSunk = true;}
else {
guesses = guesses + 1;


if (guess == location1 || guess == location2 || guess == location3) {
alert("Score a hit!");
hits = hits + 1;
} else {
alert("Too bad, you didn't hit anything. Try again!");}
if (hits == 3) {
alert("You sank my battleship!");
isSunk = true;
}
}
}
if (guess != null) {
document.write("You sank my battleship in "+guesses+" guesses!");
} else {
document.write("Sorry you left so soon. Hope to see you back! Don't go away mad, just go away!");
}