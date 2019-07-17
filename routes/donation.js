var express = require('express');
var router = express.Router();

var donation_controller = require('../controllers/donationController');

router.get('/myDonation', donation_controller.index);
router.post('/new', donation_controller.create);
router.put('/:id', donation_controller.update);
router.delete('/:id', donation_controller.delete);

module.exports = router;
