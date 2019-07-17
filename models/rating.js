var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var ratingSchema = new Schema({
	createdBy: {
		type: String
	},
	rating: {
		type: Number,
		min: 0,
		max: 5,
		required: true
	}

}, {
	timestamps: true
});


module.exports = mongoose.model('Rating', ratingSchema);