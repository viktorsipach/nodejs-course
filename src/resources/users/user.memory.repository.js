const DB = require('../../common/inMemoryDb');
const NotFoundError = require('../../utils/errorClass');

const ENTITY = 'user';

const getAll = async () => DB.getAllUsers();

const get = async id => {
  const user = DB.getUser(id);
  if (!user) {
    throw new NotFoundError(ENTITY, id);
  }
  return user;
};

const create = async user => {
  return DB.createUser(user);
};

const update = async (id, data) => {
  return DB.updateUser(id, data);
};

const deleteUser = async id => {
  return DB.deleteUser(id);
};

module.exports = { getAll, get, create, update, deleteUser };
