const express = require('express');
const router = express.Router();

const userRoutes = require("./UserRoutes");
const todoRoutes = require("./TodoRoutes");

router.use('/user', userRoutes)
router.use('/todos', todoRoutes)

router.use((req, res) => {
  res.sendStatus(404);
})

module.exports = router;