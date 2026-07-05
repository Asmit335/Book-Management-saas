const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

require("./database/connection");
const bookRoute = require("./routes/bookRoutes");
app.use(express.json());
app.use(cors());

app.use("/", bookRoute);

const PORT = process.env.PORT || 4000;

app.listen(3000, () => {
  console.log("Server is running in Port NO. 3000");
});
