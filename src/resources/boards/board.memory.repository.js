const DB = require('../../common/inMemoryDb');
const NotFoundError = require('../../utils/errorClass');

const ENTITY = 'board';

const getAll = async () => {
  const boards = await DB.getAllBoards();
  return boards;
};

const get = async id => {
  const board = await DB.getBoard(id);
  if (!board) {
    throw new NotFoundError(ENTITY, id);
  }

  return board;
};

const create = async board => {
  return DB.createBoard(board);
};

const update = async (id, data) => {
  return DB.updateBoard(id, data);
};

const deleteBoard = async id => {
  const board = await DB.deleteBoard(id);
  await DB.removeTasksFromBoard(board.id);
  if (!board) {
    throw new NotFoundError(ENTITY, id);
  }
  return board;
};

module.exports = { getAll, get, create, update, deleteBoard };
