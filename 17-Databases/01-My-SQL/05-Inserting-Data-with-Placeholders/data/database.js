// Here i am requiring : My Sql 2
// First time in my Life !
// I am soooo excited !
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    database: 'blog',
    user: 'root',
    password: '@Hasrat418913', 
});

// Test the connection once when the app starts
async function testConnection() {
    try {
        const conn = await pool.getConnection(); // try to get a connection
        console.log("✅ Database connected successfully! 🚀");
        conn.release(); // release back to pool
    } catch (err) {
        console.error(`❌ Database connection failed: ${err.message}`);
    }
}
testConnection(); // Call the function to test the connection

module.exports = pool; // Export the pool for use in other modules