var express = require('express');
var router = express.Router();

var mission_controller = require('../controllers/missionController');

router.get('/myMission', mission_controller.index);
router.post('/new', mission_controller.create);
router.put('/:id', mission_controller.update);
router.delete('/:id', mission_controller.delete);
router.get('/:id', mission_controller.show);
module.exports = router;
