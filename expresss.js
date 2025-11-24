const express = require("express");
const app = express();
const mysql = require("mysql2"); // THIS IS FIXED

// Connect to MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password", // replace with your MySQL password
  database: "school"   // replace with your database name
});

app.get("/", (req, res) => {
  res.send("Hello Yvonne!");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Start server on port 8080

app.listen(8080, () => {
  console.log("Server running on port 3000");
});
