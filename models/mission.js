var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var missionSchema = new Schema({
	title: {
		type: String
	},
	body: {
		type: String
	},
	images: [{
		url: String,
		text: String

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

module.exports = mongoose.model('Mission', missionSchema);