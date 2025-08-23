const path = require('path');


const express = require('express');
const JAADUU = require('express-async-errors');

const blogRoutes = require('./routes/blog');
const db = require('./data/database');

const app = express();

// Activate EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true })); // Parse incoming request bodies
app.use(express.static('public')); // Serve static files (e.g. CSS files)

app.use(blogRoutes);

app.use(function (error, req, res, next) {
  console.error(error);  // should log any async errors
  res.status(500).render('500'); // make sure you have a 500.ejs file
});

// Handle 404 (no route matched)
app.use(function (req, res) {
  res.status(404).render('404'); // make sure you have views/404.ejs
});


// Start the server only when we have connected to the database
db.connectToDatabase().then( function() {
  app.listen(3000, function () {
    console.log('Server is running on http://localhost:3000');
  });
});

