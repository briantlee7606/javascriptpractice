var fs = require("fs");
console.log("Starting");
var contents = fs.readFileSync("config.json");
console.log("Contents: " + contents);
console.log("Carry on...");

var config = JSON.parse(contents);
console.log("config: ", config);
console.log("username: ", config.username);