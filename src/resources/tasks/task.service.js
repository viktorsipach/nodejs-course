const tasksRepo = require('./task.memory.repository');

const getAll = id => tasksRepo.getAll(id);

const get = (id, boardId) => tasksRepo.get(id, boardId);

const create = task => tasksRepo.create(task);

const update = (id, boardId, data) => tasksRepo.update(id, boardId, data);

const deleteTask = (id, boardId) => tasksRepo.deleteTask(id, boardId);

module.exports = { getAll, get, create, update, deleteTask };
