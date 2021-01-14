const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development')
  dotenv.config();

exports.CORS_WHITELIST = [
  'https://dev.my-app.com',
  'https://staging.my-app.com',
  'https://my-app.com',
];
exports.PORT = process.env.PORT;
exports.SECRET = process.env.SECRET;
exports.SOME_API_KEY = process.env.SOME_API_KEY;
exports.SOME_API_PASSWORD = process.env.SOME_API_PASSWORD;
exports.SOME_API_URI = process.env.SOME_API_URI;
