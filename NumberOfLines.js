var fs = require('fs');

var test = fs.readFileSync(process.argv[2]).toString().split("\n");
console.log(test.length-1);
