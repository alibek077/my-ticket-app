// routes/api/index.js

const express = require('express');
const ticket_router = require('./ticket');

const router = express.Router();

// Register ticket routes under /api/ticket
router.use('/ticket', ticket_router);

module.exports = router;
