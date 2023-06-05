const { use } = require('express/lib/application');
const db = require('./models');
const res = require('express/lib/response');
const life_score = require('./models/life_score');
const salary = require('./models/salary');

// db.location.create({
//     name: 'Los Angeles',
//     full_name: 'Los Angeles, California',
//     mayor: 'Eric Garcetti'
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
//         housing: 1.527,
//         cost_of_living: 4.556,
//         startups: 10.0,
//         venture_capital: 10.0,
//         travel_connectivity: 3.958,
//         commute: 3.677,
//         business_freedom: 8.575,
//         safety: 5.705,
//         healthcare: 8.439,
//         education: 8.624,
//         environmental_quality: 4.731,
//         economy: 6.514,
//         taxation: 4.767,
//         internet_access: 5.496,
//         culture: 9.196,
//         tolerance: 6.959,
//         outdoors: 6.747,
//         city_score: 63.426,
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
//     where: {id:3}
// })
// .then(location=> { 
//     db.salary.create({ 
//         web_developer: 72706.99,
//         web_designer: 56555.53,
//         waiter: 27523.92,
//         ux_designer: 70849.85,
//         teacher: 50516.04,
//         systems_administrator: 63559.42,
//         software_engineer: 87795.16,
//         sales_manager: 75305.89,
//         research_scientist: 68894.94,
//         receptionist: 24629.08,
//         qa_engineer: 68767.79,
//         project_manager: 85110.44,
//         product_manager: 92246.91,
//         postdoctoral_researcher: 47710.76,
//         physician: 158616.88,
//         pharmacist: 96012.28,
//         operations_manager: 66056.44,
//         office_manager: 45963.76,
//         nurse: 77622.83,
//         mobile_developer: 101782.13,
//         mechanical_engineer: 72980.10,
//         marketing_manager: 72599.56,
//         lecturer: 56302.52,
//         interior_designer: 64075.62,
//         industrial_designer: 56984.92,
//         it_manager: 87414.79,
//         human_resources_manager: 81416.67,
//         hardware_engineer: 86704.00,
//         graphic_designer: 52253.12,
//         financial_analyst: 74476.26,
//         finance_manager: 88349.59,
//         fashion_designer: 50256.20,
//         executive_assistant: 49451.78,
//         electrical_engineer: 81541.93,
//         dentist: 134232.64,
//         data_scientist: 116758.68,
//         data_analyst: 61280.42,
//         customer_support: 36227.84,
//         copywriter: 55333.01,
//         content_marketing: 49333.79,
//         civil_engineer: 70977.74,
//         chemical_engineer: 86164.14,
//         chef: 48175.85,
//         cashier: 22972.96,
//         c_level_executive: 161471.45,
//         business_development: 88824.80,
//         business_analyst: 65463.78,
//         attorney: 97594.06,
//         architect: 63004.18,
//         administrative_assistant: 41019.16,
//         accountant: 56113.36,
//         account_manager: 70943.23,
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
