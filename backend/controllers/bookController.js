const { where } = require("sequelize");
const { books } = require("../database/connection");

exports.fetchBook = async (req, res) => {
  const datas = await books.findAll();
  res.json({
    message: "Books is fetched",
    datas: datas,
  });
};

exports.singleBookFetch = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      message: "Book Id not Found.",
    });
  }

  const data = await books.findByPk(id);
  if (!data) {
    return res.status(400).json({
      message: "Book not Found.",
    });
  }

  res.json({
    data,
    message: "Single Book Fetched Successfully.",
  });
};

exports.addBook = async (req, res) => {
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
};

exports.editBook = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      message: "Id not Found.",
    });
  }
  //   const data = await books.findByPk(id);
  //   if (!data) {
  //     return res.status(400).json({
  //       message: "Book not Found.",
  //     });
  //   }

  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  await books.update(
    {
      bookName,
      bookPrice,
      bookAuthor,
      bookGenre,
    },
    { where: { id } },
  );
  const data = await books.findByPk(id);

  res.json({
    message: "Books is updated Sucessfully",
    data,
  });
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  //   if (!id) {
  //     return res.status(400).json({
  //       message: "Id not found.",
  //     });
  //   }
  const data = await books.destroy({
    where: { id },
  });
  if (!data) {
    return res.status(400).json({
      message: "Book not found.",
    });
  }
  res.json({
    message: "Book deleted Successfully.",
  });
};
