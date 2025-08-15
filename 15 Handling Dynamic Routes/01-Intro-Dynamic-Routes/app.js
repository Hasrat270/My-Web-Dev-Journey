const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (request, response) => {
  response.render("index");
});
app.get("/restaurants", (req, res) => {
  const filePath = path.join(__dirname, "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  
  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

app.get("/about", (request, response) => {
  response.render("about");
});
app.get("/recommend", (request, response) => {
  response.render("recommend");
});

// Dynamic Route for Restaurants Detail Page
app.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id;
  res.render("restaurant-detail", { rid : restaurantId });
});

app.post("/recommend", function (req, res) {
  const restaurant = req.body;
  const filePath = path.join(__dirname, "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  storedRestaurants.push(restaurant);
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

  res.redirect("/confirm");
});

app.get("/confirm", (request, response) => {
  response.render("confirm");
});

app.listen(3000, () => console.log("Server Listening on port 3000!"));