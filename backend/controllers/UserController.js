const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.getUser = async (req, res, next) => {
  res.json({
    username: req.user && req.user.username,
    isAuthenticated: req.isAuthenticated(),
  });
}

module.exports.register = async (req, res, next) => {
  try {
    const user = await User.register(new User({username: req.body.username}), req.body.password);
    req.login(user, err => {
      if (err) return next(err);
      res.sendStatus(201);
    });
  } catch(err) {
    res.status(401).send(err);
  }
}