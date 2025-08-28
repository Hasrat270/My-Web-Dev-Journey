const path = require("path");

const express = require("express");
const app = express();
const session = require("express-session");
const mongodbStore = require("connect-mongodb-session");

const db = require("./data/database");
const demoRoutes = require("./routes/demo");
const { ObjectId } = require("mongodb");

const MongoDBStore = mongodbStore(session);

const sessionStore = new MongoDBStore({
  uri: 'mongodb://localhost:27017/new-auth',
  collection: 'sessions'
});

sessionStore.on('error', function(error) {
  console.error('Session store error:', error);
});


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "super-secret",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    // cookie: {
    //   maxAge: 60 * 60 * 1000,
    //   httpOnly: true,
    //   secure: false, // set to true only if using HTTPS
    // },
  })
);

// My Own Middlewear
app.use(async function (req, res, next) {
  const user = req.session.user;
  const isAuth =  req.session.isAuthenticated;
  
  if (!user || !isAuth) {
    return next(); // mera kam hogaya ab agy barh jao
  }
  
  const userDoc = await db.getDb().collection('users').findOne({ _id: new ObjectId(user.id)});
  const isAdmin = userDoc.isAdmin;
  
  res.locals.isAuth = isAuth;
  res.locals.isAdmin = isAdmin;

  next(); // i am done with , you go away!
});

app.use(demoRoutes);

app.use(function (error, req, res, next) {
  res.render("500");
});

db.connectToDatabase().then(function () {
  console.log("Connected to Database!");
  app.listen(3000, function () {
    console.log("Server listening on http://localhost:3000");
  });
});
