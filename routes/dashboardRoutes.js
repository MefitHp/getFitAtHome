const express = require('express');
const router = express.Router();
const User = require('../models/User')
const axios = require('axios')

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/auth/login')
}
router.get('/', ensureAuthenticated, (req, res, next) => {
  const currentUser = req.user
  res.render('dashboard/dashboard', currentUser);
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
      console.log('new', updatedUser)
      res.redirect('/dashboard/invoice')
    })
    .catch(err => console.log(err))
})

router.get('/invoice', (req, res, next) => {
  User.findById(req.user._id)
    .then(user => {
      res.render('dashboard/invoice', user)
    }).catch(err => console.log(err))
})

router.get('/membresia', (req, res, next) => {
  res.render('dashboard/membership')
})

router.get('/membresia/editar', (req, res, next) => {
  res.render('dashboard/editMembership')
})

//Para preguntar antes del cambio de membresía
// router.get('/membresia/editar', (req, res, next) => {
//   res.render('dashboard/membership')
// })

// router.post('/membresia/editar', (req, res, next) => {
//   res.render('dashboard/membership')
// })



router.get('/recetas', (req, res, next) => {
  res.render('dashboard/recipes')
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

