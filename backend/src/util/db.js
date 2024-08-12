const mysql = require('mysql2/promise');

// Create a connection to the database
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'econamerc'
});

module.exports = db;