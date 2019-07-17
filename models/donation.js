var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var donationSchema = new Schema({
	name: {
		type: String
	},

	mobileNumber: {
		type: String,
		validate: {
			validator: function(v) {
				var re = /^\d{10}$/;
				return (v == null || v.trim().length < 1) || re.test(v)
			},
			message: 'Provided phone number is invalid.'
		}

	},
	email: {
		type: String,
		required: true
	},
	website: {
		type: String

	},
	message: {
		type: String

	},
	causes: {
		type: String,
		enum: ['Education', 'health and nutrition', 'special children', 'livelihood',
			'emergencies', 'empowerment', 'water sanitation and hygiene', 'gender Developement',
			'nutrition', 'community issues'
		]
	}

}, {
	timestamps: true
});


module.exports = mongoose.model('Donation', donationSchema);