const Board = require('./board.model');
const Task = require('../tasks/task.model');
const NotFoundError = require('../../utils/errorClass');

const ENTITY = 'board';

const getAll = async () => {
  return Board.find({});
};

const get = async id => {
  const board = await Board.findOne({ id });
  if (!board) {
    throw new NotFoundError(ENTITY, id);
  }
  return board;
};

const create = async board => {
  return Board.create(board);
};

const update = async (id, data) => {
  return Board.updateOne({ id }, data);
};

const remove = async id => {
  await Task.deleteMany({});
  return Board.deleteOne({ id });
};

module.exports = { getAll, get, create, update, remove };
