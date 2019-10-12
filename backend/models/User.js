const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Todo = new Schema({
  entered: {type: Date, default: Date.now()},
  due: Date,
  title: String,
  body: String,
  completed: {type: Boolean, default: false},
  completedDate: Date
});

const User = new Schema({
  todos: [Todo]
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
