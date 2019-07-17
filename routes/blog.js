var express = require('express');
var router = express.Router();

var blog_controller = require('../controllers/blogController');

router.get('/myBlog', blog_controller.index);
router.post('/new', blog_controller.create);
router.put('/:id', blog_controller.update);
router.delete('/:id', blog_controller.delete);
router.get('/:id', blog_controller.show);
module.exports = router;
