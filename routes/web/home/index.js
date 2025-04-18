// routes/web/home/index.js

const express = require('express');
const router = express.Router();
const home_controller = require('../../../controllers/web/home');

// Home page, add page, and update page (with optional id)
router.get('/', home_controller.index);
router.get('/add', home_controller.add);
router.get('/update', home_controller.update);
router.get('/update/:id', home_controller.update);

module.exports = router;



