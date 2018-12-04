const express = require('express');
const router = express.Router();
const User = require('../models/User')

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/auth/login')
}
router.get('/', ensureAuthenticated, (req, res, next) => {
  const currentUser = req.user
  console.log(currentUser)
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
      console.log('invoice', user)
      res.render('dashboard/invoice', user)
    }).catch(err => console.log(err))
})

router.get('/membresia', (req, res, next) => {
  res.render('dashboard/membership')
})

module.exports = router;

