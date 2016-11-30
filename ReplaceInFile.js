var fs = require('fs');
var prompt = require('prompt');
var file = "";
var replace = "";
var rWith = "";

start();

function start(){
  prompt.start();
  prompt.get(['file', 'replace', 'with'], function (err, result) {
      if(err) console.error(err);
      let file = result.file,
          replace = new RegExp(result.replace, "gi"),
          rWith = result.with;
      if(file && replace && rWith)
        readFile()
      else {
        console.error("ERROR, file (" + file + "), replace (" + result.replace + ") or with(" + rWith + ") are empty. Try again.");
        start(); }
    });
  }

function readFile(){
  fs.readFile(file, (err, text)=>{
    if(!text) return console.error("Incorrect file")

    let contents = text.toString().replace(
      replace, rWith
    );

    writeFile(contents)
  });
}

function writeFile(contents){
  fs.writeFile(file, contents, (err)=>{
      if(err) throw err;
      console.log("Succesfully replaced " + replace + " with " + rWith + ".");
  })
}
