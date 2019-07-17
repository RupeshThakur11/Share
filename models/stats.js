var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moneyStatSchema = new Schema({
	title: {
		type: String
	},
	body: {
		type: String
	},
	links: [{
		type: String
	}],
	stats: [{
		text: String,
		value: Number
	}]

}, {
	timestamps: true
});

module.exports = mongoose.model('MoneyStat', moneyStatSchema);