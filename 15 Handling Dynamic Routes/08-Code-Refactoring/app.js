const fs = require("fs");
const path = require("path");
const express = require("express");

// Create an instance of express
const app = express();
const uuid = require("uuid");

// Set the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
// Route for the home page
app.get("/", (request, response) => {
  response.render("index");
});

// Route for the restaurants page
app.get("/restaurants", (req, res) => {
  const filePath = path.join(__dirname, "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});
// Route for the about page
app.get("/about", (request, response) => {
  response.render("about");
});
// Route for the recommend page
app.get("/recommend", (request, response) => {
  response.render("recommend");
});

// Dynamic Route for Restaurants Detail Page
app.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id;

  const filePath = path.join(__dirname, "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", { restaurant: restaurant });
    }
  }
  // If the restaurant is not found
  // Added status code
  // Users will not see it but technically it's the best practice
  res.status(404).render("404");
});

// This route will be triggered when the form is submitted
app.post("/recommend", function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  const restaurants = getStoredRestaurants();

  restaurants.push(restaurant);

  storeRestaurants(restaurants);
  // we refactored the code but it will still fail
  // we will fix it in the next part
  res.redirect("/confirm");
});
// Route for the confirm page
app.get("/confirm", (request, response) => {
  response.render("confirm");
});
// if the route is not found
app.use((req, res) => {
  res.status(404).render("404");
});
// if there is a server error
app.use((error, req, res, next) => {
  res.status(500).render("500");
});

app.listen(3000, () => console.log("Server Listening on port 3000!"));
