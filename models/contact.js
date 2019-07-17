var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var contactSchema = new Schema({
	name: {
		type: String,
		required: true
	},

	email: {
		type: String,
		required: true
	},
	city: {
		type: String

	},
	message: {
		type: String

	},
	thanksMessage: {
		type: String,
		default: "We will contact you with in 24 hours, Thanks"
	}
}, {
	timestamps: true
});

contactSchema.path('email').validate(function(email) {
	var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	return emailRegex.test(email.text);
}, 'The e-mail is not valid.')

module.exports = mongoose.model('Contact', contactSchema);