var fs = require('fs');

fs.readFile(process.argv[2], function(e, text){
  if(e)return console.log(e)
  console.log(text.toString().split("\n").length -1);
});
