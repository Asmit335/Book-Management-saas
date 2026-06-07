const bookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define("book", {
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookPrice: {
      type: DataTypes.INTEGER,
    },
    bookAuthor: {
      type: DataTypes.STRING,
      defaultValue: "Asmit Khanal",
    },
    bookGenre: {
      type: DataTypes.STRING,
    },
  });
  return Book;
};
module.exports = bookModel;
