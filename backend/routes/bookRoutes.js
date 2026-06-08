const {
  fetchBook,
  addBook,
  deleteBook,
  editBook,
  singleBookFetch,
} = require("../controllers/bookController");

const router = require("express").Router();

router.route("/books").get(fetchBook).post(addBook);
router
  .route("/books/:id")
  .patch(editBook)
  .delete(deleteBook)
  .get(singleBookFetch);

module.exports = router;
