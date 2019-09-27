const http = require('http');

const router = require('./router.js');
const { PORT } = require('./utils/constants');

const server = http.createServer(router);

server.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server running on port: ${PORT}`);
});
