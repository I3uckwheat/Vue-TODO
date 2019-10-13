const express = require('express');
const passport = require('passport');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.post('/register', UserController.register); 

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) return res.sendStatus(401);

    req.logIn(user, function(err) {
      if (err) return next(err);
      return res.sendStatus(200);
    });
  })(req, res, next);
});

router.post('/logout', (req, res, next) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;