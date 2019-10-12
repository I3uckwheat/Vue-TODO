const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.getAll = async (req, res, next) => {
  const user = await User.findOne({username: req.user.username});
  res.json(user.todos);
}

module.exports.create = async (req, res, next) => {
  try {
    const user = await User.findOne({username: req.user.username});
    user.todos.push({
      title: req.body.title,
      body: req.body.body,
      due: req.body.due
    });
    await user.save();

    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}