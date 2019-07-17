var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sliderSchema = new Schema({
	slides: [{
		url: String,
		text: String,
		boldText: String
	}],
	settings: {
		button: {
			color: String,
			text: String,
			bgColor: String

		},
	}
},
{
  timestamps: true
});

module.exports = mongoose.model('Slider', sliderSchema);