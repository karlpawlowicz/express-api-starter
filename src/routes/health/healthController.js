/**
 * Return status ok.
 * @route GET /health
 */
exports.getStatus = (req, res) => {
  res.json({ data: [{ status: 'Ok' }] });
};
