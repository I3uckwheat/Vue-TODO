const express = require('express');
const router = express.Router();

const userRoutes = require("./UserRoutes");

router.get('/', (req, res) => {
  res.send('hello world');
})

router.use('/user', userRoutes)

module.exports = router;