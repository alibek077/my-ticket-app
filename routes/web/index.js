// routes/web/index.js

const express = require('express');
const home_router = require('./home');

const router = express.Router();

// Register home routes
router.use('/', home_router);

module.exports = router;
