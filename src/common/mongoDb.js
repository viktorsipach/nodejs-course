const { MONGO_CONNECTION_STRING } = require('./config');
const mongoose = require('mongoose');

const connectToDb = cb => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log("we're connected!");
    cb();
  });
};

module.exports = {
  connectToDb
};
