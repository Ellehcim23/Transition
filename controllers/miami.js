const express = require('express');
const axios = require('axios');
const router = express.Router()
const isLoggedIn = require('../middleware/isLoggedIn')
const{ location, life_score, salary, image } = require('../models')

router.get('/', (req, res) => {
    location.findOne({
      where : {id:1}
    })
    .then(locations => {
      return res.render('miami/index', {locations: locations.dataValues})
    })
    .catch(err=> {
      console.log('Err', err);
      res.render('no-result')
    })
})
  
router.get('/edit/score',isLoggedIn, function(req,res){
    life_score.findOne({
      where: {locationId:1}
    })
    .then(life_scores=> {
      return res.render ('miami/score-edit', { life_scores: life_scores.dataValues })
    })
    .catch(err=> {
      console.log('Err', err);
      res.render('no-result')
    })
})
  
router.get('/score', (req, res) => {
    life_score.findOne({
      where: {locationId:1}
    })
    .then(life_scores => {
      console.log(life_scores.dataValues)
      return res.render('miami/score', {life_scores: life_scores.dataValues})
    })
    .catch(err=> {
      console.log('Err', err);
      res.render('no-result')
    })
})
  
router.get('/salary', (req, res) => {
    salary.findOne({
      where: {locationId:1}
    })
    .then(salaries => {
      console.log(salaries.dataValues)
      return res.render('miami/salary', {salaries: salaries.dataValues})
    })
    .catch(err=> {
      console.log('Err', err);
      res.render('no-result')
    })
})
  
router.get('/gallery', (req, res) => {
    image.findAll({
      where: { locationId:1 }
    })
    .then(images => {
      const cleaned_images = images.map(c => c.toJSON())
      console.log("Images", cleaned_images)
      return res.render('miami/gallery', {images: cleaned_images});
    })
    .catch(err=> {
      console.log('Err', err);
      res.render('no-result')
    })
})
  
router.get('/gallery/new', isLoggedIn, (req, res) => {
    return res.render('miami/gallery-new');
})
  
router.post('/gallery/new', isLoggedIn, (req, res) => {
    const newImage = {...req.body}
    newImage.locationId = parseInt(req.body.locationId)
    console.log(newImage)
    image.create(newImage)
    .then(createdImage => {
      console.log('created image', createdImage.toJSON())
      res.redirect('/miami/gallery');
    })
    .catch(err => {
      console.log('Err', err);
      res.render('no-result') 
    })
})
  
router.put('/edit/score', isLoggedIn, function(req,res) {
    life_score.update(req.body, {
      where: {locationId:1}
    })
    .then(numOfRowsChanged => {
      console.log('Amount of rows changed', numOfRowsChanged)
      res.redirect('/miami/score')
    })
    .catch(err => console.log('Error', err));
})
  
router.delete('/:id', isLoggedIn, function(req, res) {
    console.log("params", req.params)
    image.destroy({
        where: { id: parseInt(req.params.id) }
    })
    .then(numOfRowsDeleted => {
        console.log('How many rows were deleted?', numOfRowsDeleted);
        res.redirect('/miami/gallery');
    })
    .catch(err => {
        console.log('Error', err);
        res.render('no-result');
    })
})

module.exports = router