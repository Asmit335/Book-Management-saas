const express = require("express");
const app = express();
const cors = require("cors");
require("./database/connection");
const bookRoute = require("./routes/bookRoutes");
app.use(express.json());
app.use(cors());

app.use("/", bookRoute);

app.listen(3000, () => {
  console.log("Server is running in Port NO. 3000");
});
