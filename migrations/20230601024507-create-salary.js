'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('salaries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      web_developer: {
        type: Sequelize.FLOAT
      },
      web_designer: {
        type: Sequelize.FLOAT
      },
      waiter: {
        type: Sequelize.FLOAT
      },
      ux_designer: {
        type: Sequelize.FLOAT
      },
      teacher: {
        type: Sequelize.FLOAT
      },
      systems_administrator: {
        type: Sequelize.FLOAT
      },
      software_engineer: {
        type: Sequelize.FLOAT
      },
      sales_manager: {
        type: Sequelize.FLOAT
      },
      research_scientist: {
        type: Sequelize.FLOAT
      },
      receptionist: {
        type: Sequelize.FLOAT
      },
      qa_engineer: {
        type: Sequelize.FLOAT
      },
      project_manager: {
        type: Sequelize.FLOAT
      },
      product_manager: {
        type: Sequelize.FLOAT
      },
      postdoctoral_researcher: {
        type: Sequelize.FLOAT
      },
      physician: {
        type: Sequelize.FLOAT
      },
      pharmacist: {
        type: Sequelize.FLOAT
      },
      operations_manager: {
        type: Sequelize.FLOAT
      },
      office_manager: {
        type: Sequelize.FLOAT
      },
      nurse: {
        type: Sequelize.FLOAT
      },
      mobile_developer: {
        type: Sequelize.FLOAT
      },
      mechanical_engineer: {
        type: Sequelize.FLOAT
      },
      marketing_manager: {
        type: Sequelize.FLOAT
      },
      lecturer: {
        type: Sequelize.FLOAT
      },
      interior_designer: {
        type: Sequelize.FLOAT
      },
      industrial_designer: {
        type: Sequelize.FLOAT
      },
      it_manager: {
        type: Sequelize.FLOAT
      },
      human_resources_manager: {
        type: Sequelize.FLOAT
      },
      hardware_engineer: {
        type: Sequelize.FLOAT
      },
      graphic_designer: {
        type: Sequelize.FLOAT
      },
      financial_analyst: {
        type: Sequelize.FLOAT
      },
      finance_manager: {
        type: Sequelize.FLOAT
      },
      fashion_designer: {
        type: Sequelize.FLOAT
      },
      executive_assistant: {
        type: Sequelize.FLOAT
      },
      electrical_engineer: {
        type: Sequelize.FLOAT
      },
      dentist: {
        type: Sequelize.FLOAT
      },
      data_scientist: {
        type: Sequelize.FLOAT
      },
      data_analyst: {
        type: Sequelize.FLOAT
      },
      customer_support: {
        type: Sequelize.FLOAT
      },
      copywriter: {
        type: Sequelize.FLOAT
      },
      content_marketing: {
        type: Sequelize.FLOAT
      },
      civil_engineer: {
        type: Sequelize.FLOAT
      },
      chemical_engineer: {
        type: Sequelize.FLOAT
      },
      chef: {
        type: Sequelize.FLOAT
      },
      cashier: {
        type: Sequelize.FLOAT
      },
      c_level_executive: {
        type: Sequelize.FLOAT
      },
      business_development: {
        type: Sequelize.FLOAT
      },
      business_analyst: {
        type: Sequelize.FLOAT
      },
      attorney: {
        type: Sequelize.FLOAT
      },
      architect: {
        type: Sequelize.FLOAT
      },
      administrative_assistant: {
        type: Sequelize.FLOAT
      },
      accountant: {
        type: Sequelize.FLOAT
      },
      account_manager: {
        type: Sequelize.FLOAT
      },
      locationId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('salaries');
  }
};