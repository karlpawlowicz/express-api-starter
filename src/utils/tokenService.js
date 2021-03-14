const jwt = require('jsonwebtoken');

const { SECRET } = require('./constants');

exports.generateToken = (user) => {
  const { id } = user;
  const payload = { user: { id } };

  return jwt.sign(payload, SECRET, { expiresIn: '15m' });
};

exports.verifyToken = (token) => jwt.verify(token, SECRET);
