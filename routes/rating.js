var express = require('express');
var router = express.Router();

var rating_controller = require('../controllers/ratingController');

router.get('/myRating', rating_controller.index);
router.post('/new', rating_controller.create);
router.put('/:id', rating_controller.update);
router.delete('/:id', rating_controller.delete);

module.exports = router;
