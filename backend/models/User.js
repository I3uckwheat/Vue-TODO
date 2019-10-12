const mongoose = require('mongoose');
const slug = require('slugs');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Todo = new Schema({
  entered: {type: Date, default: Date.now()},
  title: String,
  slug: {type: String, unique: true},
  body: String,
  due: Date,
  completed: {type: Boolean, default: false},
  completedDate: Date
});

const User = new Schema({
  todos: [Todo]
});

User.plugin(passportLocalMongoose);

const UserModel = mongoose.model('User', User);
Todo.pre('save', async function(next) {
  if(!this.isModified() || this.slug) {
    return next();
  }

  this.slug = slug(this.title);
  const slugRegex = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
  const user = await UserModel.findOne({username: this.parent().username});

  const duplicateSlugCount = user.todos.reduce((acc, todo) => {
    if (slugRegex.test(todo.slug)) acc++;
    return acc;
  }, 0);

  if (duplicateSlugCount) {
    this.slug = `${this.slug}-${duplicateSlugCount + 1}`;
  }

  return next();
});


module.exports = UserModel;
