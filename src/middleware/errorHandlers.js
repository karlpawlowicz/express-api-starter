const ErrorHandler = require('../utils/errorHandler');

const handleNotFoundError = (router) => {
  router.use('*', () => {
    ErrorHandler.notFoundError();
  });
};

const handleClientError = (router) => {
  router.use(ErrorHandler.clientError);
};

const handleServerError = (router) => {
  router.use(ErrorHandler.serverError);
};

module.exports = [handleNotFoundError, handleClientError, handleServerError];
