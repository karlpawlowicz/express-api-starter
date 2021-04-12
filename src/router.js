const express = require('express');

const { applyMiddleware } = require('./utils');
const middleware = require('./middleware');
const { router: authRoutes } = require('./routes/auth/authRoutes');
const { router: healthRoutes } = require('./routes/health/healthRoutes');
const errorHandlers = require('./middleware/errorHandlers');

const router = express();

applyMiddleware(middleware, router);

router.use('/auth', authRoutes);
router.use('/health', healthRoutes);

applyMiddleware(errorHandlers, router);

module.exports = router;
