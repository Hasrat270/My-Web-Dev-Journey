const fs = require("fs");

async function readFile() {

  fs.readFile("data.txt").then(function(fileData) {
    console.log(`File Parse Complete!`);
    console.log(`File Data: ${fileData.toString()}`);
  }).then(function() {
    console.log(`Hello dolly!`);
  }).catch(function(error) {
    console.log(`Error: ${error.message}`);
  })

}
readFile();

// JavaScript Promises gives us .then() and .catch().
// .then() is a method that is used to handle another promise in the chain.
// .catch() is a method that is used to handle errors.