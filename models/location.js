'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.location.hasMany(models.life_score)
      models.location.hasMany(models.salary)
    }
  }
  location.init({
    name: DataTypes.STRING,
    full_name: DataTypes.STRING,
    mayor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'location',
  });
  return location;
};