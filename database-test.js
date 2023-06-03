const { use } = require('express/lib/application');
const db = require('./models');
const res = require('express/lib/response');
const life_score = require('./models/life_score');
const salary = require('./models/salary');

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
//     where: {locationId:1}
// })
// .then(foundScore => {
//     console.log('Lifescore found', foundScore.toJSON())
// })
// .catch(err=>console.log('Error', err));

// db.location.findOne ({
//     where: {id:2}
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
//         taxation: 3.920,
//         internet_access: 7.098,
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
//     where: {id:2}
// })
// .then(location=> { 
//     db.salary.create({ 
//         web_developer: 75171.64,
//         web_designer: 61059.95,
//         waiter: 24651.86,
//         ux_designer: 78566.17,
//         teacher: 50516.04,
//         systems_administrator: 71990.78,
//         software_engineer: 93139.22,
//         sales_manager: 84165.40,
//         research_scientist: 68894.94,
//         receptionist: 34634.65,
//         qa_engineer: 62464.07,
//         project_manager: 81650.66,
//         product_manager: 97059.79,
//         postdoctoral_researcher: 50661.94,
//         physician: 140264.52,
//         pharmacist: 96012.28,
//         operations_manager: 69086.56,
//         office_manager: 50142.28,
//         nurse: 73741.69,
//         mobile_developer: 79717.47,
//         mechanical_engineer: 62097.10,
//         marketing_manager: 74429.80,
//         lecturer: 71276.60,
//         interior_designer: 67212.19,
//         industrial_designer: 78820.26,
//         it_manager: 97561.15,
//         human_resources_manager: 77345.84,
//         hardware_engineer: 83651.04,
//         graphic_designer: 52253.12,
//         financial_analyst: 83558.73,
//         finance_manager: 97489.20,
//         fashion_designer: 59051.04,
//         executive_assistant: 63262.64,
//         electrical_engineer: 75476.82,
//         dentist: 120809.38,
//         data_scientist: 114105.07,
//         data_analyst: 61817.97,
//         customer_support: 40329.11,
//         copywriter: 60405.20,
//         content_marketing: 58260.86,
//         civil_engineer: 76942.25,
//         chemical_engineer: 67402.59,
//         chef: 48826.88,
//         cashier: 25790.40,
//         c_level_executive: 172512.24,
//         business_development: 85214.03,
//         business_analyst: 72523.60,
//         attorney: 105037.67,
//         architect: 79519.84,
//         administrative_assistant: 42714.17,
//         accountant: 62164.80,
//         account_manager: 69108.49,
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
