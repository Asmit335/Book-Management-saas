const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    userName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  });
  return User;
};
module.exports = UserModel;
