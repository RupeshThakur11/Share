var express = require('express');
var router = express.Router();

var contact_controller = require('../controllers/contactController');


router.post('/contact', contact_controller.create);

module.exports = router;