const bookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define("book", {
    bookName: {
      type: STRING,
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
      type: DataTypes.STRINg,
    },
  });
  return Book;
};
module.exports = bookModel;
