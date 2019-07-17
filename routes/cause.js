var express = require('express');
var router = express.Router();

var cause_controller = require('../controllers/causesController');

router.get('/myCause', cause_controller.index);
router.post('/new', cause_controller.create);
router.put('/:id', cause_controller.update);
router.delete('/:id', cause_controller.delete);
router.get('/:id', cause_controller.show);
module.exports = router;
