const uuid = require('uuid');

class Task {
  constructor({
    id = uuid(),
    title = 'Title',
    order = 1,
    description = 'Description',
    userId = '123',
    boardId = '1234',
    columnId = '12345'
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(user) {
    const { id, title, order, description, userId, boardId, columnId } = user;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;
