/**
 * Return status ok.
 * @route GET api/health
 */
exports.getStatus = async (req, res) => {
  res.json({ data: [{ status: 'ok' }] });
};
