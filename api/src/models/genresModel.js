const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Genre",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
