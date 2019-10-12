const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.register = async (req, res, next) => {
  try {
    await User.register(new User({username: req.body.username}), req.body.password);
    res.sendStatus(201);
  } catch(err) {
    res.status(401).send(err);
    next(err);
  }
}