const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
const User = sequelize.define("car", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = User;
