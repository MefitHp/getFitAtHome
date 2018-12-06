const express = require('express');
const router = express.Router();
const User = require('../models/User')
const axios = require('axios')
const Plan = require('../models/Plan')

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/auth/login')
}
router.get('/', ensureAuthenticated, (req, res, next) => {
  const currentUser = req.user
  Plan.find()
    .then(plans => {
      res.render('dashboard/dashboard', { currentUser, plans });
    }).catch(err => console.log(err))
});

router.post('/apply', ensureAuthenticated, (req, res, next) => {
  const updatedUser = {
    pickupDate: req.body.pickupDate,
    membership: req.body.membership,
    address: {
      type: "Point",
      coordinates: [req.body.lng, req.body.lat]
    }
  }
  User.findOneAndUpdate({ _id: req.user._id }, { $set: updatedUser })
    .then(resultado => {
      res.redirect('/dashboard/invoice')
    })
    .catch(err => console.log(err))
})

router.get('/invoice', (req, res, next) => {
  User.findById(req.user._id).populate('membership')
    .then(user => {
      console.log('Invoice', user)
      res.render('dashboard/invoice', user)
    }).catch(err => console.log(err))
})

router.get('/membresia', (req, res, next) => {
  User.findById(req.user._id).populate('membership')
    .then(user => {
      res.render('dashboard/membership', user)
    }).catch(err => console.log(err))
})

router.get('/membresia/editar', (req, res, next) => {
  const currentUser = req.user
  Plan.find()
    .then(plans => {
      res.render('dashboard/editMembership', { currentUser, plans });
    }).catch(err => console.log(err))
})

router.post('/membresia/editar', (req, res, next) => {
  const updatedUser = {
    membership: req.body.membership,
  }

  User.findOneAndUpdate({ _id: req.user._id }, { $set: updatedUser })
    .then(resultado => {
      res.redirect('/dashboard/membresia')
    })
    .catch(err => console.log(err))
})

router.get('/progreso', (req, res, next) => {
  res.render('dashboard/progreso')
})

router.get('/recetas', (req, res, next) => {
  res.render('dashboard/recipes')
})

router.get('/extras', (req, res, next) => {
  res.render('dashboard/extras')
})

router.get('/recetas/:id', (req, res, next) => {
  const { id } = req.params
  const conf = {
    headers: { 'X-RapidAPI-Key': "b1713b5bc8mshc67f60e6cc41cfbp103188jsnf5c8fb35caa1" }
  }
  axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, conf)
    .then(receta => {
      const ingredientes = receta.data.extendedIngredients
      res.render('dashboard/detailRecipe', { receta, ingredientes })
    }).catch(err => console.log(err))
})


module.exports = router;

