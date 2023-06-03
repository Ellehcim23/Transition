'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('life_scores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      housing: {
        type: Sequelize.FLOAT
      },
      cost_of_living: {
        type: Sequelize.FLOAT
      },
      startups: {
        type: Sequelize.FLOAT
      },
      venture_capital: {
        type: Sequelize.FLOAT
      },
      travel_connectivity: {
        type: Sequelize.FLOAT
      },
      commute: {
        type: Sequelize.FLOAT
      },
      business_freedom: {
        type: Sequelize.FLOAT
      },
      safety: {
        type: Sequelize.FLOAT
      },
      healthcare: {
        type: Sequelize.FLOAT
      },
      education: {
        type: Sequelize.FLOAT
      },
      environmental_quality: {
        type: Sequelize.FLOAT
      },
      economy: {
        type: Sequelize.FLOAT
      },
      taxation: {
        type: Sequelize.FLOAT
      },
      internet_access: {
        type: Sequelize.FLOAT
      },
      culture: {
        type: Sequelize.FLOAT
      },
      tolerance: {
        type: Sequelize.FLOAT
      },
      outdoors: {
        type: Sequelize.FLOAT
      },
      city_score: {
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
    await queryInterface.dropTable('life_scores');
  }
};