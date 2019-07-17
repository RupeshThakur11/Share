var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var COLORS = ['red', 'blue'];

var generalSettingSchema = new Schema({
	logoImg: {
		type: String

	},
	social: {
		facebook: String,
		twitter: String,
		youtube: String,
		linkedin: String,
		googleplus: String
	},
	companyEmail: {
		type: String
	},
	contactInfo: {
		address: String,
		ourTiming: String,
		mobileNumber: Number,
		email: String
	},
	information: {
		type: String
	},
	whoWeAre: {
		body: String,
		url: String,
		description: String,

	},
	button: {
		text: String,
		color: {
			type: String,
			validate: [colorValidator, 'not a valid color']
		}
	},
	copyright: {
		type: String
	},
	loc: {
		type: {
			type: String
		},
		coordinates: [Number]
	}
});

module.exports = mongoose.model('GeneralSetting', generalSettingSchema);

function colorValidator(v) {
	if (v.indexOf('#') == 0) {
		if (v.length == 7) { // #f0f0f0
			return true;
		} else if (v.length == 4) { // #fff
			return true;
		}
	}
	return COLORS.indexOf(v) > -1;
};