const tasksRepo = require('./task.db.repository');

const getAll = id => tasksRepo.getAll(id);

const get = (id, boardId) => tasksRepo.get(id, boardId);

const create = task => tasksRepo.create(task);

const update = (id, boardId, data) => tasksRepo.update(id, boardId, data);

const remove = (id, boardId) => tasksRepo.remove(id, boardId);

module.exports = { getAll, get, create, update, remove };
