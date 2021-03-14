const ErrorHandler = require('../utils/errorHandler');

const handleClientError = (router) => {
  router.use(ErrorHandler.clientError);
};

const handleNotFoundError = (router) => {
  router.use('*', () => {
    ErrorHandler.notFoundError();
  });
};

const handleServerError = (router) => {
  router.use(ErrorHandler.serverError);
};

module.exports = [handleNotFoundError, handleClientError, handleServerError];
