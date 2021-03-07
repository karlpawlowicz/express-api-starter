exports.applyMiddleware = (middlewareWrapper, router) => {
  middlewareWrapper.map((wrapper) => wrapper(router));
};
