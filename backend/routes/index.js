const express = require('express');
const router = express.Router();

const userRoutes = require("./UserRoutes");
const todoRoutes = require("./TodoRoutes");

// Easy way to check authentication on every request on the front-end in case the client has multiple tabs open 
// and signs out of one, also for initial authentication state
router.use((req, res, next) => {
  res.set("Is-Authenticated", req.isAuthenticated());
  next();
});

router.use('/user', userRoutes)
router.use('/todos', todoRoutes)

router.use((req, res) => {
  res.sendStatus(404);
})

module.exports = router;