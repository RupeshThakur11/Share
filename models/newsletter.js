var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var newsletterSchema = new Schema({

	email: {
		type: String,
		lowercase: true,
		required: true
	}
});


module.exports = mongoose.model('Newsletter', newsletterSchema);

newsletterSchema.path('email').validate = function(email) {
	return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
};