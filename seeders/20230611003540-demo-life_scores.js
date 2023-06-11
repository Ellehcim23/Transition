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
    const lifescoreList = [
      {
        housing: 1.527,
        cost_of_living:4.556,
        startups: 10,
        venture_capital: 10,
        travel_connectivity: 3.958,
        commute: 3.677,
        business_freedom: 8.574,
        safety: 5.705,
        healthcare: 8.439,
        education: 8.624,
        environmental_quality: 4.731,
        economy: 6.514,
        taxation: 4.767,
        internet_access: 5.496,
        culture: 9.196,
        tolerance: 6.959,
        outdoors: 6.747,
        city_score: 63.426,
        locationId: 2
     }, 
     {
        housing: 3.0309,
        cost_of_living:4.497,
        startups: 8.022,
        venture_capital: 5.055,
        travel_connectivity: 4.169,
        commute: 4.052,
        business_freedom: 8.671,
        safety: 4.321,
        healthcare: 8.528,
        education: 4.3945,
        environmental_quality: 6.292,
        economy: 6.514,
        taxation: 4.772,
        internet_access: 5.824,
        culture: 6.767,
        tolerance: 6.043,
        outdoors: 5.3845,
        city_score: 57.095,
        locationId: 1
    }, {
        housing: 1,
        cost_of_living: 2.342,
        startups: 10,
        venture_capital: 10,
        travel_connectivity: 6.675,
        commute: 4.052,
        business_freedom: 8.671,
        safety: 7.022,
        healthcare: 8.501,
        education: 8.093,
        environmental_quality: 5.233,
        economy: 6.514,
        taxation: 3.9205,
        internet_access: 7.0985,
        culture: 10,
        tolerance: 6.712,
        outdoors: 5.747,
        city_score: 67.275,
        locationId: 1
    }];
  
    const life_scores = lifescoreList.map(c => {
      const result ={
        housing: c.housing,
        cost_of_living: c.cost_of_living,
        startups: c.startups,
        venture_capital: c.venture_capital,
        travel_connectivity: c.travel_connectivity,
        commute: c.commute,
        business_freedom: c.business_freedom,
        safety: c.safety,
        healthcare: c.healthcare,
        education: c.education,
        environmental_quality: c.environmental_quality,
        economy: c.economy,
        taxation: c.taxation,
        internet_access: c.internet_access,
        culture: c.culture,
        tolerance: c.tolerance,
        outdoors: c.outdoors,
        city_score: c.city_score,
        locationId: c.locationId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      return result
    })
    await queryInterface.bulkInsert('life_scores', life_scores, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('life_scores', null, {});

  }
};
