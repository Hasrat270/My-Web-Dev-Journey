const http = require("http");

function handleRequest(request, response) {
  // localhost:3000 if this is the Url show "Hello World!"
  // localhost:3000/about if this is the Url show "About Page"
  // localhost:3000/contact if this is the Url show "Contact Page"
  if (request.url === "/current-time") {
    response.statusCode = 200;
    response.end("<h1>" + new Date().toISOString() + "</h1>");
  } else if (request.url === "/") {
    response.statusCode = 200;
    response.end("<h1>Hello World!</h1>");
  }
}

const server = http.createServer(handleRequest);

server.listen(3000);