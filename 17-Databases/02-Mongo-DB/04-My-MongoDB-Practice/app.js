const express = require('express');
const db = require('./database/database');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views', { root: __dirname });


app.get('/', (req, res) => {
    res.render('home');
});

db.connectToDatabase()
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    })
    .catch(err => {
        console.error('Failed to connect to the database:', err);
    });