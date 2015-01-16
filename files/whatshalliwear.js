function whatShallIWear (temp) {
if (temp < 60) {
document.write("Wear a jacket<br>");}
else if (temp < 70) {
document.write("Wear a sweater<br>");}
else {document.write("Wear a t-shirt!<br>");}
}

whatShallIWear(32);
whatShallIWear(55);
whatShallIWear(67);
whatShallIWear(103);
whatShallIWear("12");

function doIt(param) {
var test = 1;
document.write(param + " before the value is changed<br>");
param = 2;
document.write(param + " after the value is changed<br>");
test = param;
document.write(test+ " from within the function<br>");
}

var test = 1;
var input = 3;
doIt(input);
document.write(test + " from outside the function<br><br>");

function playTurn(player, location) {
var points = 0;
if (location == 1) {
points = points + 100;
}
return points;
}

var total = playTurn("Jai", 1);
// alert(points);
document.write(total + "<br>");
document.write(playTurn("Jai", 1)+ "<br><br>");

function clunk(times) {
var num = times;
while (num > 0) {
display("clunk");
num = num - 1;
}
}

function thingamajig(size) {
var facky = 1;
clunkCounter = 0;
if (size == 0) {
display ("clank");
} else if (size == 1) {
display ("thunk");
} else {
while (size > 1) {
facky = facky * size;
size = size - 1;
}
clunk(facky);
}
}

function display(output) {
document.write(output+ "<br>");
clunkCounter = clunkCounter + 1;
}

var clunkCounter = 0;
thingamajig(5);
document.write(clunkCounter + "<br>");
thingamajig(4);
document.write(clunkCounter + "<br>");
thingamajig(3);
document.write(clunkCounter + "<br>");
thingamajig(2);
document.write(clunkCounter + "<br>");
thingamajig(1);
document.write(clunkCounter + "<br>");
thingamajig(0);
document.write(clunkCounter + "<br>");

