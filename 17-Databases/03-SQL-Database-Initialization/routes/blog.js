const express = require('express');
const router = express.Router();

// Database Pool
const db = require('../data/database');

router.get("/", function(req, res) {
    res.redirect('/posts')
});

router.get("/posts", function(req, res) {
    res.render("posts-list");
});

router.get("/new-post", async function(req,res) {
    const [authors] = await db.query('SELECT * FROM authors');
    res.render('create-post', { authors: authors } );
});

module.exports = router;