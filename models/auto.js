const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Auto extends Model {}

Auto.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mileage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    license_plate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    toll_tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registration_expiration: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    insurance_expiration: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    oil_mileage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tire_mileage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "auto",
  }
);

module.exports = Auto;