const express = require('express');

const healthController = require('./healthController');

const router = express.Router();

router.route('/').get(healthController.getStatus);

exports.router = router;
