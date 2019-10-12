const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.getAll = async (req, res, next) => {
  try {
    const user = await User.findOne({username: req.user.username});
    res.json(user.todos);
  } catch (err) {
    next(err);
  }
}

module.exports.create = async (req, res, next) => {
  try {
    const user = await User.findOne({username: req.user.username});
    const newTodoCount = user.todos.push({
      title: req.body.title,
      body: req.body.body,
      due: req.body.due
    });
    await user.save();

    res.status(201).json(user.todos[newTodoCount - 1]);
  } catch (err) {
    next(err);
  }
}

module.exports.getOne = async (req, res, next) => { 
  try {
    const user = await User.findOne({username: req.user.username});
    const todo = user.todos.find(todo => todo.slug == req.params.slug);
    res.json(todo);
  } catch (err) {
    next(err);
  }
}

module.exports.update = async (req, res, next) => { 
  try {
    const user = await User.findOne({username: req.user.username});
    const todo = user.todos.find(todo => todo.slug == req.params.slug);

    todo.set({
      ...req.body
    });

    await user.save();
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

module.exports.delete = async (req, res, next) => { 
  try {
    const user = await User.findOne({username: req.user.username});
    user.todos = user.todos.filter(todo => todo.slug != req.params.slug);
    await user.save();

    res.sendStatus(204);
  } catch(err) {
    next(err);
  }
}