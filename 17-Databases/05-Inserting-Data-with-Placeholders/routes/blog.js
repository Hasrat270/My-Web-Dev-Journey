const express = require('express');
const router = express.Router();

// Import the database connection pool
// This will allow us to interact with the database
// Using the pool ensures efficient connection management
// and allows for multiple queries without opening new connections each time
const db = require('../data/database');

// Route to redirect root to posts list
// This is a simple redirect to the posts list page
// It can be useful for a clean URL structure
// When users visit the root URL, they will be redirected to /posts
router.get("/", function (req, res) {
    res.redirect('/posts')
});
// Route to render the posts list page
// This will render a view that lists all posts
// The view should be created in the views directory
// Example: views/posts-list.ejs
router.get("/posts", async function (req, res) {
    const query = `
    SELECT posts.*, authors.name AS author_name FROM posts 
    INNER JOIN authors ON posts.author_id = authors.id
    `;
    const [posts] = await db.query(query);
    res.render('posts-list', { posts: posts });
});

// Route to render the form for creating a new post
// Fetch authors from the database to populate the dropdown
// Using async/await for better readability
router.get("/new-post", async function (req, res) {
    const [authors] = await db.query('SELECT * FROM authors');
    res.render('create-post', {
        authors: authors
    });
});

// Handle form submission for creating a new post
// Using placeholders to prevent SQL injection
router.post("/posts", async function (req, res) {
    const data = [
        req.body.title,
        req.body.summary,
        req.body.content,
        req.body.author,
    ];
        await db.query(`INSERT INTO posts (title, summary, text, author_id) VALUES (?)`, [data]);
        res.redirect('/posts');
});

router.get('/posts/:id', async function (req, res) {
    const query = `
        SELECT posts.*, authors.name AS author_name, authors.email AS author_email FROM posts
        INNER JOIN authors ON posts.author_id = authors.id
        WHERE posts.id = ?
    `;
    const [posts] = await db.query(query, [req.params.id]);

    if (!posts || posts.length === 0) {
        return res.status(404).render('404');
    }

    const postData = {
        ...posts[0], // Destructure the first post from the posts array / Created a copy of the first post
        date: posts[0].date.toISOString(), // Format the date to YYYY-MM-DD / Enrich existing post data with a formatted date
        humanReadableDate: posts[0].date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }) // Formatted the date to a human-readable format
    };
    res.render('post-detail', { post: postData });
});

router.get('/posts/:id/edit', async function (req, res) {
    const query = `
        SELECT * FROM posts
        WHERE id = ?
    `;
    const [posts] = await db.query(query, [req.params.id]);
    res.render('update-post', { post: posts[0] }); 
});

router.post('/posts/:id/edit', async function (req, res) {
    const query = `
        UPDATE posts SET title = ?, summary = ?, text = ?
        WHERE id = ?
    `;

    const updateThisData = [
        req.body.title,
        req.body.summary,
        req.body.content,
        req.params.id
    ];

    await db.query(query, updateThisData); 
    res.redirect('/posts');
});

router.post('/posts/:id/delete', async function (req, res) {
    const query = `
        DELETE FROM posts
        WHERE id = ?
    `;
    await db.query(query, [req.params.id]);
    res.redirect('/posts');
});

router.use(function (req, res) {
    res.status(404).render('404');
});

module.exports = router;