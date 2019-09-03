exports.applyMiddleware = (middlewareWrapper, router) => {
  middlewareWrapper.map(wrapper => {
    return wrapper(router);
  });
};
