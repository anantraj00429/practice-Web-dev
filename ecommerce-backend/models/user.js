const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:"); // Use an appropriate database connection string for your environment

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { User, sequelize };
