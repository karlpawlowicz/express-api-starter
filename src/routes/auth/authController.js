const validator = require('validator');

const { HTTP400Error } = require('../../utils/httpErrors');
const tokenService = require('../../utils/tokenService');

// @route   POST api/auth
// @desc    Generate token
// @access  Public
exports.createToken = (req, res, next) => {
  let { password, username } = req.body;

  try {
    if (!username || !password) throw new HTTP400Error();

    username = validator.escape(validator.trim(username));
    password = validator.escape(validator.trim(password));

    if (!username || !password) throw new HTTP400Error();

    const userId = username;

    const token = tokenService.generateToken({ id: userId });

    res.status(201).json({ data: [{ token }] });
  } catch (e) {
    next(e);
  }
};
