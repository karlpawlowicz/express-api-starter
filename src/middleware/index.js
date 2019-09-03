const { handleHelmet } = require('./helmet');
const { handleCORS } = require('./cors');
const { handleRequestBodyParsing } = require('./common');

module.exports = [handleHelmet, handleCORS, handleRequestBodyParsing];
