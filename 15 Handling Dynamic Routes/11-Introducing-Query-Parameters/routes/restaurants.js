const express = require("express");
const uuid = require("uuid");

const resData = require("../util/restaurant-data");

const router = express.Router();

// Route for the restaurants page
router.get("/restaurants", (req, res) => {
  let order = req.query.order;
  let nextOrder = "desc";

  if (order !== "asc" && order !== "desc") {
    order = "asc";
  }

  if (order === "desc") {
    nextOrder = "asc";
  } 

  const storedRestaurants = resData.getStoredRestaurants();

  storedRestaurants.sort(function(resA,resB) {
    if (
      (order === "asc" && resA.name > resB.name) ||
      (order === "desc" && resB.name > resA.name)
    ) {
      return 1;
    } else {
      return -1;
    }
  });

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
    nextOrder: nextOrder
  });
});

// Route for the recommend page
router.get("/recommend", (request, response) => {
  response.render("recommend");
});

// Dynamic Route for Restaurants Detail Page
router.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id;

  const storedRestaurants = resData.getStoredRestaurants();

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
router.post("/recommend", function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  const restaurants = resData.getStoredRestaurants();

  restaurants.push(restaurant);

  resData.storeRestaurants(restaurants);
  res.redirect("/confirm");
});
// Route for the confirm page
router.get("/confirm", (request, response) => {
  response.render("confirm");
});

module.exports = router;