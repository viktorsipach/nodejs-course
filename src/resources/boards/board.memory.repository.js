const DB = require('../../common/inMemoryDb');

const getAll = async () => DB.getAllBoards();

const get = async id => {
  const board = DB.getBoard(id);

  if (!board) {
    throw new Error(`The board with id: ${id} was not found!`);
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
  return DB.deleteBoard(id);
};

module.exports = { getAll, get, create, update, deleteBoard };
