const express = require('express');
const router = express.Router();
const User = require('../models/User')
const uploadCloud = require('../config/cloudinary.js');

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/auth/login')
}
router.get('/', ensureAuthenticated, (req, res, next) => {
  const currentUser = req.user
  console.log(currentUser)
  res.render('profile/profile', currentUser);
});

//Modificar datos del usuario
router.get('/edit/:id', (req, res, next) => {
  //const currentUser = req.user
  const { id } = req.params
  const action = `/profile/edit/${id}`
  User.findById(id)
    .then(user => {
      res.render('profile/edit', user)
    })
    .catch(e => {
      next(e)
    })
})

router.post('/edit/:id', uploadCloud.single('photoURL'), (req, res, next) => {
  const { id } = req.params
  const { name, email } = req.body
  const newuser = {}
  if (req.file) {
    const photoURL = req.file.url
    newuser.name = name
    newuser.photoURL = photoURL
    newuser.email = email

  } else {
    newuser.name = name
    newuser.email = email
  }
  User.findByIdAndUpdate(id, { $set: newuser }, { new: false })
    .then(user => {
      res.redirect(`/profile/`)
    })
    .catch(e => {
      res.render('profile/edit', { user: req.body, error })
    })
})

module.exports = router;

