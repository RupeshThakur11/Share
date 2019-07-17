var Newsletter = require('../models/newsletter');
var lodash = require('lodash');
var async = require('async');
var bodyParser = require('body-parser');



exports.create = function(req, res) {
	Newsletter.create(req.body, function(err, newsletter) {

		if (err) {
			res.status(200).send({
				status: "error",
				message: "We can't create Newsletter Please try again.",
				errorInfo: err
			})
		}
		return res.status(200).send({
			status: "success",
			message: "Thanks for signing up, Let the fun begin.",
			response: newsletter
		});
	});
};