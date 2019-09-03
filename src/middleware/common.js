const bodyParser = require('body-parser');

exports.handleRequestBodyParsing = router => {
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: true }));
};
