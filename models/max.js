"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Max extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Max.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Max",
    }
  );
  return Max;
};
