const express = require('express');
const todoController = require('../controllers/todoController')
const router = express.Router();

router.get('/', todoController.getAll);
router.post('/', todoController.create);
router.get('/:slug', todoController.getOne);
router.put('/:slug', todoController.update); 
router.delete('/:slug', todoController.delete);



module.exports = router;