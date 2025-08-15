const express = require("express");

const router = express.Router();

// Route for the home page
router.get("/", (request, response) => {
  response.render("index");
});

// Route for the about page
router.get("/about", (request, response) => {
  response.render("about");
});

module.exports = router;