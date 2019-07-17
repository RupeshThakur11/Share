var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var weHelpSchema = new Schema({
	title: {
		type: String
	},
	value: [{
		type: Number,
		text: String,
		bodyText: String
	}],
	settings: {
		button: {
			color: String,
			text: String,
			bgColor: String

		},
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('WeHelp', weHelpSchema);