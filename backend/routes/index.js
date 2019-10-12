const express = require('express');
const passport = require('passport');
const router = express.Router();

const userRoutes = require("./UserRoutes");

router.use('/', (req, res) => {
  res.send('hello world');
})

router.use(userRoutes)

module.exports = router;