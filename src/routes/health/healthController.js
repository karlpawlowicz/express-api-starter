// @route   GET api/health
// @desc    Return status ok
// @access  Public
exports.getStatus = async (req, res) => {
  res.json({ data: [{ status: 'ok' }] });
};
