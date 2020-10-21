const User = require('./user.model');
const Task = require('../tasks/task.model');

const getAll = async () => {
  return User.find({});
};

const get = async id => {
  return User.findOne({ _id: id });
};

const create = async user => {
  return User.create(user);
};

const update = async (id, data) => {
  return User.updateOne({ _id: id }, data);
};

const remove = async id => {
  await Task.updateMany({}, { userId: null });
  return User.deleteOne({ _id: id });
};

module.exports = { getAll, get, create, update, remove };
