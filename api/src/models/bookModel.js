const { DataTypes, STRING } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Book",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      author: {
        allowNull: false,
        type: DataTypes.STRING
      },
      editorial: {
        allowNull: false,
        type: DataTypes.STRING
      },
      year: {
        allowNull: true,
        type: DataTypes.STRING
      },
      description: {
        allowNull: true,
        type: DataTypes.TEXT
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING
      },
      stock: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      available: {
        type: DataTypes.BOOLEAN,
        default: true
      }
    },
    { timestamps: false }
  );
};
