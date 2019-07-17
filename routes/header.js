var express = require('express');
var router = express.Router();

var header_controller = require('../controllers/headerController');
router.get('/myHeader', header_controller.index);
router.post('/new', header_controller.create);
router.put('/:id', header_controller.update);
router.delete('/:id', header_controller.delete);

module.exports = router;
