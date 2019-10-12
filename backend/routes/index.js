const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.get('/', (req, res) => {
  res.send('hello world');
})

router.post('/user', UserController.register); 

module.exports = router;