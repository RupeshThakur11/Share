var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testimonialSchema = new Schema({

	title: {
		type: String
	},
	message: {
		type: String
	},
	profession: {
		type: String
	}

}, {
	timestamps: true
});

module.exports = mongoose.model('Testimonial', testimonialSchema);