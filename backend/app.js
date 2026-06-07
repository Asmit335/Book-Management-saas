const express = require("express");
const app = express();
require("./database/connection");
app.get("/books", (req, res) => {
  res.json({
    message: "Books is fetched",
  });
});

app.post("/books", (req, res) => {
  res.json({
    message: "Books is Posted Successfully.",
  });
});

app.patch("/books/:id", (req, res) => {
  res.json({
    message: "Books is updated Sucessfully",
  });
});

app.delete("/books/:id", (req, res) => {
  res.json({
    message: "Books is deleted Successfully.",
  });
});

app.listen(3000, () => {
  console.log("Server is running in Port NO. 3000");
});
// DATABASE_URL="postgresql://postgres.eyvafshtkmqlmnkjhsdr:Timnnab 335!@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres"
