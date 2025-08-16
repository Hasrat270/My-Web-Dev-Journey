const fs = require("fs/promises");

async function readFile() {
  let fileData;

  try {
    fileData = await fs.readFile("data.txt");
    console.log(`File Parse Complete!`);
    console.log(`File Data: ${fileData.toString()}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }


  console.log("Hi There!")
}
readFile();

// JavaScript Promises gives us .then() and .catch().
// .then() is a method that is used to handle another promise in the chain.
// .catch() is a method that is used to handle errors.
