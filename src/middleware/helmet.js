const helmet = require('helmet');

exports.handleHelmet = router => {
  router.use(helmet());
};
