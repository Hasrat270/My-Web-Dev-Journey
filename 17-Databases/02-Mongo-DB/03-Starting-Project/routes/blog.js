const express = require('express');
const mongodb = require('mongodb');



const router = express.Router();

const db = require('../data/database');

const ObjectId = mongodb.ObjectId;

router.get('/', function(req, res) {
  res.redirect('/posts');
});

router.get('/posts', function(req, res) {
  res.render('posts-list');
});

router.get('/new-post', async function(req, res) {
  const authors = await db.getDb().collection('authors').find().toArray(); // Ensure database connection is established
  // console.log(authors);
  res.render('create-post', { authors: authors });
});

router.post('/posts', async function(req, res) {
  const authorId = new ObjectId(req.body.author); // Convert the author ID from string to ObjectId
  const author = await db.getDb().collection('authors').findOne( { _id: authorId } ); // Fetch the author document from the database

  const newPost = {
    title: req.body.title,
    summary: req.body.summary, // get the form data from the request body
    body: req.body.content, 
    createdAt: new Date(), // enrich the post data with current date
    author: {
      id: authorId, // store the author's ID
      name: author.name, // get the author's name from the author object
      email: author.email
    }
  };
});

module.exports = router;