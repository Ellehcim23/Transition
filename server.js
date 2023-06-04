require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');
const axios = require('axios');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const app = express();
const methodOverride = require('method-override');
const { json } = require('sequelize');
const {location , life_score, salary} = require('./models')


// Environment variables 
SECRET_SESSION = process.env.SECRET_SESSION;
// console.log('>>>>>>>>>>>', SECRET_SESSION);

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(express.static('images'));
app.use(layouts);
app.use(methodOverride('_method'))

app.use(flash());            // flash middleware

app.use(session({
  secret: SECRET_SESSION,    // What we actually will be giving the user on our site as a session cookie
  resave: false,             // Save the session even if it's modified, make this false
  saveUninitialized: true    // If we have a new session, we save it, therefore making that true
}));

// add passport 
app.use(passport.initialize());      // Initialize passport
app.use(passport.session());         // Add a session

app.use((req, res, next) => {
  console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

// res.json ({data: response.data['_links']['ua:item']}) to get names and links to each urban area in the API using /urban_areas/
// res.json ({data: response.data.photos[0]['image']['web']}) or ['mobile'] to get images from each ua area using /slug:.../images/
// res.json ({data: response.data.categories}) use a foreach to display name of each category and score out of 10
// .summary 
// res.json ({data: response.data.salaries})
app.get('/', (req, res) => {
  axios.get('https://api.teleport.org/api/urban_areas/slug:new-york/salaries/')
  .then(function (response) {
    console.log(response.data) // use in conjuction with /scores to get info on each score category
    res.render('index')
    // res.json ({data: response.data.salaries})
    // res.json ({data: response.data['_links']['ua:item']})
  })
  .catch(function (error) {
    res.json({ message: 'Data not found. Please try again later.' });
  });
  // res.render('index');
})

app.get('/about', (req, res) => {
  return res.render('about');  // View to be made
})

app.get('/contact', function (req, res) {
  return res.render('contact');
});

// app.get('/new-york', (req, res) => {
//   axios.get('https://api.teleport.org/api/urban_areas/slug:new-york/')
//   .then(function (response) {
//     console.log(response.data)
//     // res.json ({data: response.data})
//     res.render('new-york')
//   })
//   .catch(function (error) {
//     res.json({ message: 'Data not found. Please try again later.' });
//   });
// })

app.get('/new-york', (req, res) => {
  location.findOne({
    where : {id:2}
  })
  .then(locations => {
    console.log('raw New York info', locations.dataValues)
    return res.render('new-york', {locations: locations.dataValues})
  })
  .catch(err=> {
    console.log('Err', err);
    res.render('no-result')
  })
})

// app.get('/new-york/scores', (req, res) => {
//   axios.get('https://api.teleport.org/api/urban_areas/slug:new-york/scores/')
//   .then(function (response) {
//     console.log(response.data.categories)
//     res.json ({data: response.data.categories})
//   })
//   .catch(function (error) {
//     res.json({ message: 'Data not found. Please try again later.' });
//   });
// })
app.get('/new-york/score', (req, res) => {
  life_score.findOne({
    where: {locationId:2}
  })
  .then(life_scores => {
    console.log(life_scores.dataValues)
    return res.render('new-york-score', {life_scores: life_scores.dataValues})
  })
  .catch(err=> {
    console.log('Err', err);
    res.render('no-result')
  })
})

// app.get('/new-york/salary', (req, res) => {
//   axios.get('https://api.teleport.org/api/urban_areas/slug:new-york/salaries/')
//   .then(function (response) {
//     console.log(response.data.salaries)
//     res.json ({data: response.data.salaries})
//   })
//   .catch(function (error) {
//     res.json({ message: 'Data not found. Please try again later.' });
//   });
// })

app.get('/new-york/salary', (req, res) => {
  salary.findOne({
    where: {locationId:1}
  })
  .then(salaries => {
    console.log(salaries.dataValues)
    return res.render('new-york-salary', {salaries: salaries.dataValues})
  })
  .catch(err=> {
    console.log('Err', err);
    res.render('no-result')
  })
})

// app.get('/miami', (req, res) => {
//   axios.get('https://api.teleport.org/api/urban_areas/slug:miami/')
//   .then(function (response) {
//     console.log(response.data)
//     // res.json ({data: response.data})
//     res.render('miami', {miami: info})
//   })
//   .catch(function (error) {
//     res.json({ message: 'Data not found. Please try again later.' });
//   });
// })
app.get('/miami', (req, res) => {
  location.findOne({
    where : {id:1}
  })
  .then(locations => {
    return res.render('miami', {locations: locations.dataValues})
  })
  .catch(err=> {
    console.log('Err', err);
    res.render('no-result')
  })
})

// app.get('/miami/scores', (req, res) => {
//   axios.get('https://api.teleport.org/api/urban_areas/slug:miami/scores/')
//   .then(function (response) {
//     console.log(response.data.categories)
//     res.json ({data: response.data.categories})
//   })
//   .catch(function (error) {
//     res.json({ message: 'Data not found. Please try again later.' });
//   });
// })

app.get('/miami/score', (req, res) => {
  life_score.findOne({
    where: {locationId:1}
  })
  .then(life_scores => {
    console.log(life_scores.dataValues)
    return res.render('miami-score', {life_scores: life_scores.dataValues})
  })
  .catch(err=> {
    console.log('Err', err);
    res.render('no-result')
  })
})

// app.get('/miami/salaries', (req, res) => {
//   axios.get('https://api.teleport.org/api/urban_areas/slug:miami/salaries/')
//   .then(function (response) {
//     console.log(response.data.salaries)
//     res.json ({data: response.data.salaries})
//   })
//   .catch(function (error) {
//     res.json({ message: 'Data not found. Please try again later.' });
//   });
// })

app.get('/miami/salary', (req, res) => {
  salary.findOne({
    where: {locationId:1}
  })
  .then(salaries => {
    console.log(salaries.dataValues)
    return res.render('miami-salary', {salaries: salaries.dataValues})
  })
  .catch(err=> {
    console.log('Err', err);
    res.render('no-result')
  })
})
app.use('/auth', require('./controllers/auth'));

// Add this below /auth controllers
app.get('/profile', isLoggedIn, (req, res) => {
  const { id, name, email } = req.user.get(); 
  res.render('profile', { id, name, email });
});

app.get('/:input', function(req,res) {
  res.json({message: `There is no data for / ${req.params.input}`})
})

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;
