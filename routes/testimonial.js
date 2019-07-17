var express = require('express');
var router = express.Router();

var testimonial_controller = require('../controllers/testimonialController');

router.get('/myTestimonial', testimonial_controller.index);
router.post('/new', testimonial_controller.create);
router.put('/:id', testimonial_controller.update);
router.delete('/:id', testimonial_controller.delete);
router.get('/:id', testimonial_controller.show);
module.exports = router;
