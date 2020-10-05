const encode = str => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i].toUpperCase();
  }
  return result;
};

const decode = str => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i].toLowerCase();
  }
  return result;
};

const cipher = (action, str) => {
  if (action === 'encode') {
    return encode(str);
  } else if (action === 'decode') {
    return decode(str);
  }
  return 'Invalid action!';
};

module.exports = cipher;
