// 1 : Builtin modules
const path = require("path");

// 2 : Third-party modules
const express = require("express");

// 3 : My Own modules
const defaultRoutes = require("./routes/default");
const restaurantRoutes = require("./routes/restaurants");


// Create an instance of express
const app = express();

// Set the template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/", defaultRoutes);
app.use("/", restaurantRoutes);

// if the route is not found
app.use((req, res) => {
  res.status(404).render("404");
});
// if there is a server error
app.use((error, req, res, next) => {
  res.status(500).render("500");
});

app.listen(3000, () => console.log("Server Listening on port 3000!"));
