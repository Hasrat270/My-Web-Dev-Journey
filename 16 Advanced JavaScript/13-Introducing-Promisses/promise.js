const fs = require("fs/promises");

function readFile() {

  fs.readFile("data.txt").then(function(fileData) {
    console.log(`File Parse Complete!`);
    console.log(`File Data: ${fileData.toString()}`);
  }).then(function() {
    console.log(`Hello dolly!`);
  }).then(function() {
    console.log(`Next Line!`);
  }).then(function() {
    console.log(`Last Line!`);
  }).then(function() {
    console.log(`Better then Callback Hell!`);
  });

}
readFile();