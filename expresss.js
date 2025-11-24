const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Yvonne!");
});

app.listen(8080, () => {
  console.log("Server running on port 3000");
});
