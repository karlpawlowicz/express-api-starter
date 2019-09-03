const express = require('express');
const validator = require('validator');

const { HTTP400Error } = require('../../utils/httpErrors');
const tokenService = require('../../utils/tokenService');

const router = express.Router();

// @route   POST api/auth
// @desc    Generate token
// @access  Public
router.route('/').post((req, res, next) => {
  let { password, username } = req.body;

  try {
    if (!username || !password) throw new HTTP400Error();

    username = validator.escape(validator.trim(username));
    password = validator.escape(validator.trim(password));

    const userId = username;

    const token = tokenService.generateToken({ id: userId });

    res.status(201).json({ data: [{ token }] });
  } catch (e) {
    next(e);
  }
});

exports.router = router;
