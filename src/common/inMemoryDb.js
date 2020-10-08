const User = require('../resources/users/user.model');

const DB = [];

DB.push(new User(), new User(), new User());

const getAllUsers = async () => DB.slice(0);

const getUser = async id => DB.filter(el => el.id === id)[0];

const createUser = async user => {
  DB.push(user);
  return user;
};

const updateUser = async (id, data) => {
  const user = await getUser(id);
  user.name = data.name;
  user.password = data.password;
  user.login = data.login;
  console.log(user);
  DB.filter(el => el.id !== id);
  DB.push(user);
  return user;
};

const deleteUser = async id => {
  DB.filter(el => el.id !== id);
  return DB.slice(0);
};

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };
