const express = require("express");
const { books } = require("./database/connection");
const app = express();
require("./database/connection");
app.use(express.json());

app.get("/books", async (req, res) => {
  const datas = await books.findAll();
  res.json({
    message: "Books is fetched",
    datas: datas,
  });
});

app.post("/books", async (req, res) => {
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  if (!bookName || !bookPrice || !bookAuthor || !bookGenre) {
    return res.status(400).json({
      message: "All fields are required!",
    });
  }
  const data = await books.create({
    bookName,
    bookAuthor,
    bookGenre,
    bookPrice,
  });
  res.json({
    message: "Books is Posted Successfully.",
    data,
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
