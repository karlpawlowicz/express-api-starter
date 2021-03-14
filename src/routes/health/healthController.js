/**
 * Return status ok.
 * @route GET /api/health
 */
exports.getStatus = (req, res) => {
  res.json({ data: [{ status: 'Ok' }] });
};
