var express = require('express');
var router = express.Router();

var money_controller = require('../controllers/statController');

router.get('/money-stat', money_controller.index);
router.post('/stat', money_controller.create);
router.put('/:id', money_controller.update);
router.delete('/:id', money_controller.delete);

module.exports = router;
