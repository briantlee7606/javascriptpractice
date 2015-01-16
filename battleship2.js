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
	fire: function (guess) {
		for (var z = 0; z<this.pastGuesses.length; z++) {
			if (guess === this.pastGuesses[z]) {
				alert("You have guessed that location already");
				return false;
			}
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
		}
	},
	parseGuess: function(guess) {
		var validFirstCharacters = ["A","B","C","D","E","F","G"];
		if (guess.length != 2) {
			return null;
		}
		if (validFirstCharacters.indexOf(guess.substr(0,1).toUpperCase()) == -1) {
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
		return validatedGuess = firstChar + guess.substr(1,1);
	}
};

controller.processGuess("g6");
