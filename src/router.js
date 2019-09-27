const express = require('express');

const { applyMiddleware } = require('./utils');
const middleware = require('./middleware');
const { router: authRoutes } = require('./routes/auth/authRoutes');
const { router: healthRoutes } = require('./routes/health/healthRoutes');
const errorHandlers = require('./middleware/errorHandlers');
const { PORT } = require('./utils/constants');

const router = express();

applyMiddleware(middleware, router);

router.use('/api/auth', authRoutes);
router.use('/api/health', healthRoutes);

applyMiddleware(errorHandlers, router);

module.exports = router;
