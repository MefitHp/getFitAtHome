const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
  if (!req.user) {
    res.render('index');
    return
  }
  res.redirect('/dashboard')
});

module.exports = router;
