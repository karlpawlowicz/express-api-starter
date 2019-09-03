const jwt = require('jsonwebtoken');
const { SECRET } = require('./constants');

exports.generateToken = user => {
  const { id } = user;
  const payload = { user: { id } };

  return jwt.sign(payload, SECRET, { expiresIn: '1h' });
};

exports.verifyToken = token => {
  return jwt.verify(token, SECRET);
};
