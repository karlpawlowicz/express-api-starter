const express = require('express');

const router = express.Router();

// @route   GET api/health
// @desc    Return status ok
// @access  Public
exports.getStatus = async (req, res) => {
  res.json({ data: [{ status: 'ok' }] });
};

router.route('/').get(this.getStatus);

exports.router = router;
