const express = require('express');
const passport = require('passport');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.post('/register', UserController.register); 

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  res.sendStatus(200);
});

router.post('/logout', (req, res, next) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;