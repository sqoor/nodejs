const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mysql123',
    database: 'nodejs',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


module.exports = pool;