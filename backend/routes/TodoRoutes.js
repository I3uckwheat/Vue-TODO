const express = require('express');
const todoController = require('../controllers/todoController')
const router = express.Router();

router.get('/', todoController.getAll);

router.post('/', todoController.create);

router.get('/:slug', (req, res) => {
  // Get one todo for user
  res.send('get /:slug')
});

router.put('/:slug', (req, res) => {
  res.send('put /:slug')
  // Update todo
});

router.delete('/:slug', (req, res) => {
  res.send('delete /:slug')
  // Removes todo
});



module.exports = router;