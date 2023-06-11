'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const locationsList = [
    {
    name:'Miami',
    full_name: 'Miami, Florida',
    mayor: 'Tomás Regalado'
   }, 
   {
    name:'Los Angeles',
   full_name: 'Los Angeles, California',
   mayor: 'Eric Garcetti'
  }, {
    name:'New York',
   full_name: 'New York, New York',
   mayor: 'Bill de Blasio'
  }];

  const locations = locationsList.map(c => {
    const result ={
      name: c.name,
      full_name: c.full_name,
      mayor: c.mayor,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    return result
  })
  await queryInterface.bulkInsert('locations', locations, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('locations', null, {});
  }
};
