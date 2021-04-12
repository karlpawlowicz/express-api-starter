const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  dotenv.config();
}

exports.CORS_WHITELIST = [
  'https://dev.my-app.com',
  'https://staging.my-app.com',
  'https://my-app.com',
];
exports.PORT = process.env.PORT;
exports.SECRET = process.env.SECRET;
exports.FOO = process.env.FOO;
exports.BAR = process.env.BAR;
exports.BAZ = process.env.BAZ;
