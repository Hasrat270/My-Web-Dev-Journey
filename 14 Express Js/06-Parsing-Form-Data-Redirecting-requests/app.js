const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false}));

app.get("/", (request, response) => {
    const htmlFilePath = path.join(__dirname, "views", "index.html");
    response.sendFile(htmlFilePath);
});

app.get("/restaurants", (request, response) => {
    const htmlFilePath = path.join(__dirname, "views", "restaurants.html");
    response.sendFile(htmlFilePath);
})

app.get("/about", (request, response) => {
    const htmlFilePath = path.join(__dirname, "views", "about.html");
    response.sendFile(htmlFilePath);
})

app.get("/recommend", (request, response) => {
    const htmlFilePath = path.join(__dirname, "views", "recommend.html");
    response.sendFile(htmlFilePath);
})

app.post("/recommend", function(req, res) {
    const restaurant = req.body;
    const filePath = path.join(__dirname, "data", "restaurants.json");

    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    storedRestaurants.push(restaurant);
    fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

    res.redirect("/confirm");
})

app.get("/confirm", (request, response) => {
    const htmlFilePath = path.join(__dirname, "views", "confirm.html");
    response.sendFile(htmlFilePath);
})



app.listen(3000, () => console.log("Server Listening on port 3000!"));