var express = require('express');
var router = express.Router();

var slider_controller = require('../controllers/sliderController');

router.get('/mySlider', slider_controller.index);
router.post('/new', slider_controller.create);
router.put('/:id', slider_controller.update);
router.delete('/:id', slider_controller.delete);

module.exports = router;
