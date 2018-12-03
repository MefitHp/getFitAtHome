const express = require('express');
const router = express.Router();

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
  res.send(req.body)
})

module.exports = router;

