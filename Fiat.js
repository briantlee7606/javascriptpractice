var fiat = {
make: "Fiat",
model: "500",
year: 1957,
color: "Medium Blue",
passengers: 2,
convertible: false,
mileage: 80000,
started: false,
fuel: 10,
fuelCapacity: 20,

start: function() {
if (this.fuel > 0) {
this.started = true;
} else {
alert("You don't have any gas!");
}
},

stop: function() {
this.started = false;
},

drive: function() {
if (this.started) {
document.write("Zoom, zoom!<br><br>");
this.fuel -= 1;
}
else {
alert("You need to start the engine first<br><br>");
}
},

addFuel: function() {
var done = false;
while (!done) {
var fillUpAmount = parseInt(prompt("How much fuel do you want to add? "));
if (fillUpAmount > (this.fuelCapacity - this.fuel)) {
alert("Tank capacity is " + this.fuelCapacity + " and the tank already has " + this.fuel + ". You cannot add more than " +(this.fuelCapacity - this.fuel) + " in this fueling.");
} else {
done = true;
}
}
this.fuel = this.fuel + fillUpAmount;

},
checkFuel: function() {
if (this.fuel > 5) {
document.write("Fuel level is " + this.fuel + "<br>"+"This is " + (this.fuel/this.fuelCapacity)*100 + "% full");
return true;
}  else {"You don't have much fuel left! Better fill up!");
return false;
}
}
};


fiat.start();
fiat.drive();
fiat.stop();
if (!fiat.checkFuel()) {
fiat.addFuel();
}

/* for (var prop in fiat) {
//document.write(prop +": " + fiat.prop + "<br>");
document.write(prop +": " + fiat[prop] + "<br>");
} */