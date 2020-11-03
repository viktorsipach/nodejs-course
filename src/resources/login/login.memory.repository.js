const { checkUserByLogin } = require('../../common/inMemoryDb');

const checkUser = async login => {
  try {
    const user = await checkUserByLogin(login);
    return user;
  } catch (e) {
    throw new Error(`Cant login user (${e.message}).`);
  }
};

module.exports = { checkUser };
