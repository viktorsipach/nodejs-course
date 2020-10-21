const uuid = require('uuid');
const mongoose = require('mongoose');

// class Column {
//   constructor({ id = uuid(), title = 'TITLE', order = 1 } = {}) {
//     this.id = id;
//     this.title = title;
//     this.order = order;
//   }
// }

// class Board {
//   constructor({ id = uuid(), title = 'TITLE', columns = [new Column()] } = {}) {
//     this.id = id;
//     this.title = title;
//     this.columns = columns;
//   }
// }

const boardSchema = new mongoose.Schema(
  {
    title: String,
    columns: Array,
    id: {
      type: String,
      default: uuid
    }
  },
  { versionKey: false }
);

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
