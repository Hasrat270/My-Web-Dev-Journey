const fs = require("fs");

function readFile() {

    fs.readFile(`data.txt`, function (error, fileData) {
    console.log(`File Parse Complete!`);

    console.log(`File Data: ${fileData.toString()}`);

  });

  console.log(`Hello dolly!`)
  /* We can see that this code is executed first, since the readFile function is asynchronous.
    We use asynchronous programming for large files or time taking operations like the 
    following: 1 - Reading a file, 2 - Fetching data from an API,
              3 - Sending an HTTP request to a server, 4 - Saving data to a database,
              5 - Reading data from a database and so on */
}

readFile();
