const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

let accessLogStream;

if (process.env.NODE_ENV === 'production')
  accessLogStream = fs.createWriteStream(
    path.join(__dirname, '../../logs/access.log'),
    {
      flags: 'a'
    }
  );

exports.handleMorgan = router => {
  if (process.env.NODE_ENV === 'production')
    router.use(morgan('combined', { stream: accessLogStream }));
  else router.use(morgan('dev'));
};
