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
    const imagesList = [
      {
        img_address: 'https://images.wsj.net/im-535702/?width=2000&size=1.5',
        img_title: 'Miami Beach Compound',
        img_description: 'A waterfront compound in Miami Beach is coming on the market for $170 million. If it sells for that amount, the property will be the most expensive ever sold in the state of Florida.',
        locationId: 1
     }, 
     {
      img_address: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8XWvH7rxB.A/v1/-1x-1.jpg',
      img_title: 'Hollywood BLVD',
      img_description: 'Hollywood Boulevard in Los Angeles is like Times Square in New York: Oriented toward tourists, with lots of flashing lights and cheap attractions',
      locationId: 2 
    }, {
      img_address: 'https://roadsurfer.com/wp-content/uploads/huntington-beach.jpg.webp',
      img_title: 'Huntington Beach',
      img_description: 'Huntington Beach, located between L.A. and San Diego, is popular among the surfing crowd and is locally known as “Surf City”',
      locationId: 2
    }, {
      img_address: 'https://images.unsplash.com/photo-1658101617293-6e788952461e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      img_title: 'Miami at its Purest',
      img_description: 'Palm trees line the side walks and aim to retake civilization',
      locationId: 1
    }, {
      img_address: 'https://images.unsplash.com/photo-1556807044-eaf2e0eecb6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      img_title: 'New York Springs',
      img_description: 'New York in the spring time brings a beauty like no other. Waters turn the concrete jungle into a mirror of lights.',
      locationId: 3
    }, {
      img_address: 'https://images.unsplash.com/photo-1527362385507-e99d6bf2a2a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1384&q=80',
      img_title: 'Rush Hour',
      img_description: 'Its often said people in New York do not drive. Here bumper to bumper traffic demonstrates the fallacy in this take',
      locationId: 3
    }];
  
    const images = imagesList.map(c => {
      const result ={
        img_address: c.img_address,
        img_title: c.img_title,
        img_description: c.img_description,
        locationId: c.locationId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      return result
    })
    await queryInterface.bulkInsert('images', images, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('images', null, {});
  }
};
