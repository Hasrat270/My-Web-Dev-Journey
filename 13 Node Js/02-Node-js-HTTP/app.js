const http = require("http");
const PORT = 3000;
const server = http.createServer();

function feedback() {
    console.log(`Server is running on port ${PORT}`);
}

server.listen(PORT, feedback);