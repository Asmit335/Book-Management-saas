const { Sequelize, DataTypes } = require("sequelize");
// const bookModel = require("./models/bookModel");
const sequelize = new Sequelize(
  "postgresql://postgres.eyvafshtkmqlmnkjhsdr:Timnnab 335!@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres",
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Authenticated and Connected Database.");
  })
  .catch((e) => {
    console.log("Error:", e);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.books = require("./models/bookModel")(sequelize, DataTypes);

//migrating data

module.exports = db;
