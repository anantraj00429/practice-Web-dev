const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite", // This file will be created to store your database
});

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync the database schema
sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Error syncing database", err));

module.exports = {
  User,
  sequelize,
};
