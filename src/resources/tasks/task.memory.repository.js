const DB = require('../../common/inMemoryDb');

const getAll = async id => DB.getAllTasks(id);

const get = async id => {
  const user = DB.getTask(id);

  if (!user) {
    throw new Error(`The task with id: ${id} was not found!`);
  }

  return user;
};

const create = async task => {
  return DB.createTask(task);
};

const update = async (id, data) => {
  return DB.updateTask(id, data);
};

const deleteTask = async (id, boardId) => {
  return DB.deleteTask(id, boardId);
};

module.exports = { getAll, get, create, update, deleteTask };
