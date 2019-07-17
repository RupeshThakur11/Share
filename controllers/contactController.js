var Contact = require('../models/contact');
var lodash = require('lodash');
var async = require('async');
var bodyParser = require('body-parser');


exports.create = function(req, res) {
	Contact.create(req.body, function(err, causes) {
		
		if (err) {
			res.status(200).send({
				status: "error",
				message: "We can't create Contact Please try again.",
				errorInfo: err
			})
		}
		return res.status(200).send({
			status: "success",
			message: "We will contact you with in 24 hours, Thanks",
			response: causes
		});
	});
};

