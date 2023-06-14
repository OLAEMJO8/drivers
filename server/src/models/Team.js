const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Team",
    {
      id: {
        type: DataTypes.INTEGER, //Entero
        primaryKey: true,
        autoIncrement: true, // Autoincremento
      },
      teams: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false, freezeTableName: true } // crear tabla en singular
  );
};
