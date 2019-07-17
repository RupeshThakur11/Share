var express = require('express');
var router = express.Router();

var newsletter_controller = require('../controllers/newsletterController');


router.post('/news', newsletter_controller.create);


module.exports = router;
