var express = require('express');
var router = express.Router();

var wehelp_controller = require('../controllers/wehelp.Controller');

router.get('/allHelps', wehelp_controller.index);
router.post('/new', wehelp_controller.create);
router.put('/:id', wehelp_controller.update);
router.delete('/:id', wehelp_controller.delete);

module.exports = router;
