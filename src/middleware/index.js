const { handleHelmet } = require('./helmet');
const { handleCORS } = require('./cors');
const { handleRequestBodyParsing } = require('./common');
const { handleMorgan } = require('./morgan');

module.exports = [
  handleHelmet,
  handleCORS,
  handleRequestBodyParsing,
  handleMorgan,
];
