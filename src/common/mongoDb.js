/* eslint-disable no-sync */
const { MONGO_CONNECTION_STRING } = require('./config');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../resources/users/user.model');

async function createUser(user) {
  return await User.create(user);
}

const connectToDb = cb => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log("we're connected!");
    createUser({
      name: 'Viktar Sipach',
      login: 'admin',
      password: bcrypt.hashSync('admin', 10)
    });
    cb();
  });
};

module.exports = {
  connectToDb
};
