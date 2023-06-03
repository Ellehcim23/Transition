'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class life_score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.life_score.belongsTo(models.location)
    }
  }
  life_score.init({
    housing: DataTypes.FLOAT,
    cost_of_living: DataTypes.FLOAT,
    startups: DataTypes.FLOAT,
    venture_capital: DataTypes.FLOAT,
    travel_connectivity: DataTypes.FLOAT,
    commute: DataTypes.FLOAT,
    business_freedom: DataTypes.FLOAT,
    safety: DataTypes.FLOAT,
    healthcare: DataTypes.FLOAT,
    education: DataTypes.FLOAT,
    environmental_quality: DataTypes.FLOAT,
    economy: DataTypes.FLOAT,
    taxation: DataTypes.FLOAT,
    internet_access: DataTypes.FLOAT,
    culture: DataTypes.FLOAT,
    tolerance: DataTypes.FLOAT,
    outdoors: DataTypes.FLOAT,
    city_score: DataTypes.FLOAT,
    locationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'life_score',
  });
  return life_score;
};