const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');

const DB = {
  users: [],
  boards: [],
  tasks: []
};

// Users

DB.users.push(new User(), new User(), new User());

const getAllUsers = async () => DB.users.slice(0);

const getUser = async id => DB.users.filter(el => el.id === id)[0];

const createUser = async user => {
  DB.users.push(user);
  return user;
};

const updateUser = async (id, data) => {
  const user = await getUser(id);
  user.name = data.name;
  user.password = data.password;
  user.login = data.login;
  DB.users.filter(el => el.id !== id);
  DB.users.push(user);
  return user;
};

const deleteUser = async id => {
  DB.users.filter(el => el.id !== id);
  DB.tasks.forEach(el => {
    el.userId = null;
  });
  return DB.users.slice(0);
};

// Boards

DB.boards.push(new Board(), new Board(), new Board());

const getAllBoards = async () => DB.boards.slice(0);

const getBoard = async id => DB.boards.filter(el => el.id === id)[0];

const createBoard = async board => {
  DB.boards.push(board);
  return board;
};

const updateBoard = async (id, data) => {
  const board = await getBoard(id);
  board.title = data.title;
  board.columns = data.columns;
  DB.boards.filter(el => el.id !== id);
  DB.boards.push(board);
  return board;
};

const deleteBoard = async id => {
  DB.boards.filter(el => el.id !== id);
  DB.tasks.filter(el => el.boardId !== id);
  return DB.boards.slice(0);
};

// Tasks

const getAllTasks = async id => {
  const tasks = DB.tasks.filter(el => el.boardId === id);
  return tasks;
};

const getTask = async id => DB.tasks.filter(el => el.id === id)[0];

const createTask = async task => {
  DB.tasks.push(task);
  return task;
};

const updateTask = async (id, data) => {
  const task = await getTask(id);
  task.title = data.title;
  task.order = data.order;
  task.description = data.description;
  task.userId = data.userId;
  task.boardId = data.boardId;
  task.columnId = data.columnId;
  DB.tasks.filter(el => el.id !== id);
  DB.tasks.push(task);
  return task;
};

const deleteTask = async (id, boardId) => {
  DB.tasks.filter(el => el.id !== id && el.boardId !== boardId);
  return DB.tasks.slice(0);
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};
