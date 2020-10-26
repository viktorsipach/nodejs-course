const Task = require('./task.model');
const NotFoundError = require('../../utils/errorClass');

const ENTITY = 'task';

const getAll = async id => {
  const tasks = await Task.find({ boardId: id });
  if (!tasks.length) {
    throw new NotFoundError(ENTITY, id);
  }
  return tasks;
};

const get = async (id, boardId) => {
  const task = await Task.findOne({ id, boardId });
  if (!task) {
    throw new NotFoundError(ENTITY, id);
  }

  return task;
};

const create = async task => {
  return Task.create(task);
};

const update = async (id, boardId, data) => {
  return Task.updateOne({ id, boardId }, data);
};

const remove = async (id, boardId) => {
  return Task.deleteOne({ id, boardId });
};

module.exports = { getAll, get, create, update, remove };
