const cors = require('cors');

const { CORS_WHITELIST } = require('../utils/constants');
const { HTTP401Error } = require('../utils/httpErrors');

const corsOptions = {
  origin: (origin, callback) => {
    if (CORS_WHITELIST.indexOf(origin) !== -1 || !origin) callback(null, true);
    else callback(new HTTP401Error());
  }
};

exports.handleCORS = router => {
  router.use(cors(corsOptions));
};
