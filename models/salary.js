'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class salary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.salary.belongsTo(models.location)

    }
  }
  salary.init({
    web_developer: DataTypes.FLOAT,
    web_designer: DataTypes.FLOAT,
    waiter: DataTypes.FLOAT,
    ux_designer: DataTypes.FLOAT,
    teacher: DataTypes.FLOAT,
    systems_administrator: DataTypes.FLOAT,
    software_engineer: DataTypes.FLOAT,
    sales_manager: DataTypes.FLOAT,
    research_scientist: DataTypes.FLOAT,
    receptionist: DataTypes.FLOAT,
    qa_engineer: DataTypes.FLOAT,
    project_manager: DataTypes.FLOAT,
    product_manager: DataTypes.FLOAT,
    postdoctoral_researcher: DataTypes.FLOAT,
    physician: DataTypes.FLOAT,
    pharmacist: DataTypes.FLOAT,
    operations_manager: DataTypes.FLOAT,
    office_manager: DataTypes.FLOAT,
    nurse: DataTypes.FLOAT,
    mobile_developer: DataTypes.FLOAT,
    mechanical_engineer: DataTypes.FLOAT,
    marketing_manager: DataTypes.FLOAT,
    lecturer: DataTypes.FLOAT,
    interior_designer: DataTypes.FLOAT,
    industrial_designer: DataTypes.FLOAT,
    it_manager: DataTypes.FLOAT,
    human_resources_manager: DataTypes.FLOAT,
    hardware_engineer: DataTypes.FLOAT,
    graphic_designer: DataTypes.FLOAT,
    financial_analyst: DataTypes.FLOAT,
    finance_manager: DataTypes.FLOAT,
    fashion_designer: DataTypes.FLOAT,
    executive_assistant: DataTypes.FLOAT,
    electrical_engineer: DataTypes.FLOAT,
    dentist: DataTypes.FLOAT,
    data_scientist: DataTypes.FLOAT,
    data_analyst: DataTypes.FLOAT,
    customer_support: DataTypes.FLOAT,
    copywriter: DataTypes.FLOAT,
    content_marketing: DataTypes.FLOAT,
    civil_engineer: DataTypes.FLOAT,
    chemical_engineer: DataTypes.FLOAT,
    chef: DataTypes.FLOAT,
    cashier: DataTypes.FLOAT,
    c_level_executive: DataTypes.FLOAT,
    business_development: DataTypes.FLOAT,
    business_analyst: DataTypes.FLOAT,
    attorney: DataTypes.FLOAT,
    architect: DataTypes.FLOAT,
    administrative_assistant: DataTypes.FLOAT,
    accountant: DataTypes.FLOAT,
    account_manager: DataTypes.FLOAT,
    locationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'salary',
  });
  return salary;
};