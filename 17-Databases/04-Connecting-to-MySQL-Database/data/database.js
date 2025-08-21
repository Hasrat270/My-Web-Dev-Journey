// Here i am requiring : My Sql 2
// First time in my Life !
// I am soooo excited !
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    database: 'blog',
    user: 'root',
    password: '@Hasrat418913'
});

module.exports = pool;

