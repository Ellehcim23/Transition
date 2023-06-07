const { use } = require('express/lib/application');
const db = require('./models');
const res = require('express/lib/response');
const life_score = require('./models/life_score');
const salary = require('./models/salary');
const image = require('./models/image');

// db.image.findAll({
//     where: { locationId:1 }
//   })
//   .then(images => {
//       const cleaned_images = images.map(c => c.toJSON())
//       console.log("Images", cleaned_images)
//   })
//   .catch(err=> {
//     console.log('Err', err)
// })

// db.location.create({
//     name: 'New York',
//     full_name: 'New York, New York',
//     mayor: 'Bill de Blasio'
// }) 
// .then(newLocation => {
//     console.log('new location', newLocation.toJSON())
// })
// .catch(err=>console.log('Error', err));

// db.life_score.findOne ({
//     where: {locationId:3}
// })
// .then(foundScore => {
//     console.log('Lifescore found', foundScore.toJSON())
// })
// .catch(err=>console.log('Error', err));

// db.location.findOne ({
//     where: {id:3}
// })
// .then(location=> {
//     db.life_score.create({
//         housing: 1.0,
//         cost_of_living: 2.342,
//         startups: 10.0,
//         venture_capital: 10.0,
//         travel_connectivity: 6.675,
//         commute: 5.519,
//         business_freedom: 8.671,
//         safety: 7.022,
//         healthcare: 8.501,
//         education: 8.093,
//         environmental_quality: 5.233,
//         economy: 6.514,
//         taxation: 3.9205,
//         internet_access: 7.0985,
//         culture: 10.0,
//         tolerance: 6.712,
//         outdoors: 5.747,
//         city_score: 67.275,
//     })
//     .then(life_score=> {
//         location.addLife_score(life_score)
//         .then(result=> {
//             console.log('Life Score added to location', result)
//         })
//         .catch(err=>console.log('Error', err));
//     })
//     .catch(err=>console.log('Error', err));
// })
// .catch(err=>console.log('Error', err));


// db.location.findOne ({
//     where: {id:1}
// })
// .then(location=> { 
//     db.salary.create({ 
//         web_developer: 53606.00,
//         web_designer: 45044.22,
//         waiter: 23933.84,
//         ux_designer: 87685.46,
//         teacher: 43238.31,
//         systems_administrator: 64207.99,
//         software_engineer: 70999.57,
//         sales_manager: 67712.01,
//         research_scientist: 80377.43,
//         receptionist: 30273.25,
//         qa_engineer: 42979.86,
//         project_manager: 58816.15,
//         product_manager: 72193.23,
//         postdoctoral_researcher: 41808.40,
//         physician: 141575.40,
//         pharmacist: 87703.53,
//         operations_manager: 59390.20,
//         office_manager: 37188.86,
//         nurse: 48791.49,
//         mobile_developer: 86123.34,
//         mechanical_engineer: 64657.81,
//         marketing_manager: 66498.75,
//         lecturer: 58099.41,
//         interior_designer: 53321.67,
//         industrial_designer: 58582.62,
//         it_manager: 64000.11,
//         human_resources_manager: 59317.86,
//         hardware_engineer: 45794.36,
//         graphic_designer: 43108.83,
//         financial_analyst: 63577.29,
//         finance_manager: 79209.97,
//         fashion_designer: 44811.78,
//         executive_assistant: 44105.64,
//         electrical_engineer: 53912.01,
//         dentist: 128131.16,
//         data_scientist: 87569.01,
//         data_analyst: 48379.28,
//         customer_support: 29392.40,
//         copywriter: 46571.95,
//         content_marketing: 36647.96,
//         civil_engineer: 58452.25,
//         chemical_engineer: 52115.40,
//         chef: 39387.01,
//         cashier: 17554.81,
//         c_level_executive: 165611.75,
//         business_development: 82325.42,
//         business_analyst: 65463.78,
//         attorney: 82706.83,
//         architect: 45876.83,
//         administrative_assistant: 30171.12,
//         accountant: 57213.62,
//         account_manager: 66050.59,
//     })
//     .then(salary=> {
//         location.addSalary(salary)
//         .then(result=> {
//             console.log('Salary added to location', result)
//         })
//         .catch(err=>console.log('Error', err));
//     })
//     .catch(err=>console.log('Error', err));
// })
// .catch(err=>console.log('Error', err));
