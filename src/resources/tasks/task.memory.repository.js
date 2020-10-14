const DB = require('../../common/inMemoryDb');

const getAll = async id => {
  const tasks = await DB.getAllTasks(id);
  if (!tasks.length) {
    throw new Error(`The task with id: ${id} was not found`);
  }
  return tasks;
};

const get = async (id, boardId) => {
  const task = await DB.getTask(id, boardId);
  if (!task) {
    throw new Error(`The task with id: ${id} was not found!`);
  }

  return task;
};

const create = async task => {
  return DB.createTask(task);
};

const update = async (id, boardId, data) => {
  return DB.updateTask(id, boardId, data);
};

const deleteTask = async (id, boardId) => {
  const task = DB.deleteTask(id, boardId);
  if (!task) {
    throw new Error(`The task with id: ${id} was not found`);
  }
  return task;
};

module.exports = { getAll, get, create, update, deleteTask };
