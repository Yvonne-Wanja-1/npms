const express = require("express");
const app = express();

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
