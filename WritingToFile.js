var fs = require("fs");
console.log("Starting...");
fs.writeFile("write_sync.txt", "Hello, world async!", function(error)
{console.log("Written file");
});
console.log("All done!");
