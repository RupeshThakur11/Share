var express = require('express');
var router = express.Router();

var footer_controller = require('../controllers/footerController');

router.get('/footer', footer_controller.index);
router.post('/footer', footer_controller.create);
router.put('/:id', footer_controller.update);
router.delete('/:id', footer_controller.delete);

module.exports = router;
