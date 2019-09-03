const express = require('express');

const router = express.Router();

// @route   GET api/health
// @desc    Return status ok
// @access  Public
router.route('/').get(async (req, res) => {
  res.json({ data: [{ status: 'ok' }] });
});

exports.router = router;
