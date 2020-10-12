const tasksRepo = require('./task.memory.repository');

const getAll = id => tasksRepo.getAll(id);

const get = id => tasksRepo.get(id);

const create = task => tasksRepo.create(task);

const update = (id, data) => tasksRepo.update(id, data);

const deleteTask = (id, boardId) => tasksRepo.deleteTask(id, boardId);

module.exports = { getAll, get, create, update, deleteTask };
