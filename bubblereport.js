var scores = [60, 50, 60, 58, 54, 54, 
42, 50, 52, 54, 48, 69, 34, 55, 51, 
52, 44, 51, 69, 64, 66, 55, 52, 61, 
46, 31, 57, 52, 44, 69, 41, 53, 71, 
61, 75, 44];

//var counter = 0;

var highestScore = 0;
var highestScoreTest = [];
//var highestScoreTestCounter = 0;
var phrase;

function listScores(bubblescores) {
for (var counter = 0; counter < bubblescores.length; counter=counter+1) {
//while (counter < scores.length) {
document.write("Bubble solution #"+ (counter + 1) + " score: "+bubblescores[counter] + "<br>");
if (bubblescores[counter] == highestScore) {
highestScoreTest.push(counter+1);
//highestScoreTest[highestScoreTestCounter] = counter+1;
//highestScoreTestCounter = highestScoreTestCounter+1;
} else if (bubblescores[counter] > highestScore) {
highestScore = bubblescores[counter];
highestScoreTest = [];
//highestScoreTestCounter = 0;
highestScoreTest.push(counter+1);
//highestScoreTest[highestScoreTestCounter] = counter + 1;
//highestScoreTestCounter = highestScoreTestCounter + 1;
}
//counter = counter + 1;
}
}

listScores(scores);
composePhrase();
document.write("<br><br>");
document.write("Bubble tests: " + (scores.length) + "<br>");
document.write("Highest score: " + highestScore + "<br>");
document.write(phrase);

function composePhrase() {
var solutionword;
if (highestScoreTest.length == 1) {
solutionword = "Solution";
} else {
solutionword = "Solutions";
}
//var phrase = solutionword + " with highest score: #" + highestScoreTest[0];
phrase = solutionword + " with highest score: #" + highestScoreTest[0];
if (highestScoreTest.length > 1) {
//var solutionCounter = 1;
for (var solutionCounter = 1; solutionCounter < highestScoreTest.length; solutionCounter++) {
//while (solutionCounter < highestScoreTest.length) {
phrase = phrase + ", #" + highestScoreTest[solutionCounter];
//solutionCounter = solutionCounter + 1;
}
}
return phrase;
}
 