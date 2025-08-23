const express = require('express');
const mongodb = require('mongodb');



const router = express.Router();

const db = require('../data/database');

const ObjectId = mongodb.ObjectId;

router.get('/', function (req, res) {
  res.redirect('/posts');
});

router.get('/posts', async function (req, res, next) {
  try {
    const posts = await db
      .getDb()
      .collection('posts')
      .find({}, { title: 1, summary: 1, 'author.name': 1 })
      .toArray();

    res.render('posts-list', { posts: posts });
  } catch (err) {
    return res.status(500).render('500');
  }
});



router.get('/new-post', async function (req, res) {
  const authors = await db.getDb().collection('authors').find().toArray(); // Ensure database connection is established
  // console.log(authors);
  res.render('create-post', {
    authors: authors
  });
});

router.post('/posts', async function (req, res) {
  const authorId = new ObjectId(req.body.author); // Convert the author ID from string to ObjectId
  const author = await db.getDb().collection('authors').findOne({
    _id: authorId
  }); // Fetch the author document from the database

  const post = {
    title: req.body.title,
    summary: req.body.summary, // get the form data from the request body
    body: req.body.content,
    date: new Date(), // enrich the post data with current date
    author: {
      id: authorId, // store the author's ID
      name: author.name, // get the author's name from the author object
      email: author.email
    }
  };
  const result = await db.getDb().collection('posts').insertOne(post); // Insert the new post into the "posts" collection
  // console.log(result);
  res.redirect('/posts'); // Redirect to the list of posts after successful insertion
});

router.get('/posts/:id', async function(req, res, next) {
  let postId = req.params.id; // url se id get kiya he yaha
  try {
    postId = new ObjectId(req.params.id);
  } catch (error) {
    return res.status(404).render('404');
    // return next(error);
  }
  const post = await db.getDb().collection('posts').findOne({_id: postId}, {summary: 0}); // database se id k basis pr post get kiya he yaha
  if (!post) {
    return res.status(404).render('404'); // agar post na mile to 404 page render krna he
  }
  // console.log(post.date);
  post.humanReadableDate = post.date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }); // date ko human readable format me convert kiya he yaha
  post.date = post.date.toISOString(); // date ko ISO format me convert kiya he
  res.render('post-detail', {post: post}); // aur post-detail view render krke ejs ko post data dena  
});

router.get('/posts/:id/edit', async function(req, res) {
  const postId = req.params.id;
  const post = await db.getDb().collection('posts').findOne({_id: new ObjectId(postId)}, {title: 1, summary: 1, body: 1}); // Get the post to be edited

  if (!post) {
    return res.status(404).render('404'); // If post not found, render 404 page
  }

  res.render('update-post', {post: post});
});

router.post('/posts/:id/edit', async function(req, res) {
  const postId = new ObjectId(req.params.id);
  const updatedPost = {
    title: req.body.title,
    summary: req.body.summary,
    body: req.body.content
  };

  const result = await db.getDb().collection('posts').updateOne(
    {_id: postId},
    {$set: updatedPost}
  );

  if (result.matchedCount === 0) {
    return res.status(404).render('404'); // If no post was found to update, render 404 page
  }

  res.redirect('/posts/' + postId); // Redirect to the updated post's detail page
});

router.post('/posts/:id/delete', async function(req, res) {
  const postId = new ObjectId(req.params.id);
  const result = await db.getDb().collection('posts').deleteOne({_id: postId});
  res.redirect('/posts'); // Redirect to the posts list after deletion
});

module.exports = router;