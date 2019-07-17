var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var footerSchema = new Schema({
	general: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'GeneralSetting'
	},
	aboutText: {
		type: String
	},
	ourPartners: [{
		url: String
	}]

}, {
	timestamps: true
});

module.exports = mongoose.model('Footer', footerSchema);