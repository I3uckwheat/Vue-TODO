const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.get('/', (req, res) => {
  res.send('hello world');
})

const mongoose = require('mongoose');
const User = mongoose.model('User');
router.post('/user', UserController.register); 
module.exports = router;