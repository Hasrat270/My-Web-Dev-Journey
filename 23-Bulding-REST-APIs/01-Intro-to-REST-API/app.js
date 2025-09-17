const express = require("express");

const db = require("./data/database");
const quoteRoutes = require("./routes/quotes.routes");

const app = express();

app.use("/quote", quoteRoutes);

app.use(function(error, req, res, next) {
  res.status(500).json({ message: "An unknown error occurred!" });
})

db.initDb()
  .then(function () {
    app.listen(3000, function () {
      console.log("Server is running on port 3000");
    });
  })
  .catch(function (error) {
    log("Failed to connect to the database");
    console.log(error);
  });
