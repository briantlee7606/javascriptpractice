var view = {
// This method takes a string message and displays italics
// in the message display area
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},
	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},

	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	},
	clearAllFields: function() {
		this.displayMessage("");
		guessInput.innerHTML="A0";
	}
};

var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,
	pastGuesses: [],
	ships: [{locations: ["10", "20", "30"], hits: [false, false, false], sunk: false},
			{locations: ["32", "33", "34"], hits: [false, false, false], sunk: false},
			{locations: ["63", "64", "65"], hits: [false, false, false], sunk: false}],
	generateShipLocations: function () {
		var locations;
		for (var i = 0; i < this.numShips; i++) {
			do {
				locations = this.generateShip();
			}
			while (this.collision(locations));
			this.ships[i].locations = locations;
		}
	},
	generateShip: function () {
		var direction = Math.floor(Math.random() * 2); // Math.random returns a random number between 0 & 1
														// The random number * 2 is because we want to be able to get either a 0 or a 1. 
														// Otherwise Math.floor will always just return a 0.
		var row;										// Math.floor rounds the random number down to the nearest integer
		var col;
		if (direction === 1) { // Horizontal
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * ((this.boardSize - this.shipLength) + 1));
		} else { // Vertical
			row = Math.floor(Math.random() * ((this.boardSize - this.shipLength) + 1));
			col = Math.floor(Math.random() * this.boardSize);
		}
		var newShipLocations = [];
		for (var i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				newShipLocations.push(row+""+col); // The +""+ part turns this into a string. Otherwise				
				col += 1;							// the row and column would be added together and 
			} else {									// you'd end up with a single number 
				newShipLocations.push(row+""+col);
				row+=1;
			}
		}
		return newShipLocations;
	},
	fire: function (guess) {
		if (this.pastGuesses.indexOf(guess) > -1) {
				alert("You have guessed that location already");
				return false;
			}
		this.pastGuesses.push(guess);
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			
			// the following is using the indexOf method
			var index = ship.locations.indexOf(guess);
			if (index > -1) {
				ship.hits[index] = true;
				view.displayHit(guess);
				this.registerSunk(ship);
				if (this.isSunk(ship) == true) {
					this.shipsSunk += 1;					
					var message = "You sunk the ship!";
				} else {
				var message = "Good shot! You got a hit!";
				}
				view.displayMessage(message);
				return true;
			}
			// The following is an alternative: looping through the locations array
	/* 		for (var j = 0; j < ship.locations.length; j++) {
				if (guess === ship.locations[j]) {
					ship.hits[j] = true;
					view.displayHit(guess);
					view.displayMessage("Good shot! You got a hit!");
					return true;
				}
			}		
	 */	}
		view.displayMiss(guess);
		view.displayMessage("Aw, too bad. You missed.");
		return false;
	},
	registerSunk: function(ship) {
		var sunkIndex = ship.hits.indexOf(false);
		if (sunkIndex > -1) {
			return;
		}
		ship.sunk = true;
	},
	isSunk: function(ship) {
		if (ship.sunk == true) {
			return true;
		}
		else {
			return false;
		}
	}
};

var controller = {
	guesses: 0,
	processGuess: function(guess) {
		var validGuess = this.parseGuess(guess);
		if (validGuess == null) {
			alert("Invalid entry. Try again.");
		} else {
		this.guesses += 1;
		var hit = model.fire(validGuess);
		if (model.shipsSunk === model.numShips) {
			view.displayMessage("You've sunk all the ships in " + this.guesses + " guesses! Congratulations, skipper!");
		}		
		}
	},
	parseGuess: function(guess) {
		var validFirstCharacters = ["A","B","C","D","E","F","G"];
		if (guess === null || guess.length !== 2) {
			return null;
		}
		if (validFirstCharacters.indexOf(guess.substr(0,1).toUpperCase()) === -1) {
			return null;
		} else {
			var firstChar = validFirstCharacters.indexOf(guess.substr(0,1).toUpperCase());
		}
		if (isNaN(guess.substr(1,1))) {
			return null;
		}
		if (guess.substr(1,1) < 0 || guess.substr(1,1) >= model.boardSize) {
			return null;
		}
		return firstChar + guess.substr(1,1);
	}
};
// Putting the event handling calls into the init() function.
function init() {
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;
	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;
}

function handleKeyPress(e) {
	var fireButton = document.getElementById("fireButton");
	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
}

function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value;
	controller.processGuess(guess);
	guessInput.value = "";
}

window.onload = init;
model.numShips = parseInt(prompt("How many ships do you want on the board? Enter a number or press 'Enter' for 3"));


/* controller.processGuess("b0");
controller.processGuess("c0");
controller.processGuess("d1");
controller.processGuess("d3");
controller.processGuess("d1");
controller.processGuess("d5");
controller.processGuess("d0");
controller.processGuess("d2");
controller.processGuess("d4");
controller.processGuess("g3");
controller.processGuess("g5");
controller.processGuess("g4");
 */