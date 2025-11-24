// Import packages
const { faker } = require('@faker-js/faker');
const mysql = require("mysql2"); // THIS IS FIXED

// Test Faker
console.log("Fake email:", faker.internet.email());

// Connect to MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password", // replace with your MySQL password
  database: "school"   // replace with your database name
});

// Query database
connection.query("SELECT * FROM users", (err, results) => {
  if (err) throw err;
  console.log("Users in database:", results);
  connection.end(); // close the connection
});
