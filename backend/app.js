const express = require("express");
const app = express();
require("./database/connection");
const bookRoute = require("./routes/bookRoutes");
app.use(express.json());

app.use("/", bookRoute);

app.listen(3000, () => {
  console.log("Server is running in Port NO. 3000");
});
