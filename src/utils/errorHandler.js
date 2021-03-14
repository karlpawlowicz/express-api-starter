const { HTTP404Error, HTTPClientError } = require('./httpErrors');

exports.clientError = (error, req, res, next) => {
  if (error instanceof HTTPClientError) {
    res.status(error.statusCode).json({ error: error.message });
  } else {
    next(error);
  }
};

exports.notFoundError = () => {
  throw new HTTP404Error('Method not found');
};

exports.serverError = (error, req, res) => {
  // eslint-disable-next-line
  console.error(error);

  if (process.env.NODE_ENV === 'production') {
    res.status(500).json({ error: 'Internal server error' });
  } else {
    res.status(500).send(error.stack);
  }
};
