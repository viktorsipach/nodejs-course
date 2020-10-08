const tasksRepo = require('./task.memory.repository');

const getAll = id => tasksRepo.getAll(id);

const get = id => tasksRepo.get(id);

const create = (id, task) => tasksRepo.create(id, task);

const update = (id, data) => tasksRepo.update(id, data);

const deleteTask = id => tasksRepo.deleteUser(id);

module.exports = { getAll, get, create, update, deleteTask };
