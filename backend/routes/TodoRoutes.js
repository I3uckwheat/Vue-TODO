const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Get all todos for user
  res.send('get /')
});

router.get('/:slug', (req, res) => {
  // Get one todo for user
  res.send('get /:slug')
});

router.post('/', (req, res) => {
  // create todo
  res.send('post /')
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