const express = require('express');
const passport = require('passport');
const router = express.Router();
const UserController = require('../controllers/UserController')

const userRoutes = require("./UserRoutes");

router.post('/register', UserController.register); 

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  res.sendStatus(200);
});

router.post('/logout', (req, res, next) => {
  req.logout();
  res.sendStatus(200);
});

router.use(userRoutes)

router.use('/', (req, res) => {
  res.send('hello world');
})

module.exports = router;