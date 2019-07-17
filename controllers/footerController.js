var Footer = require('../models/footer');
var GeneralSettings = require('../models/general-settings');
var lodash = require('lodash');
var async = require('async');
var bodyParser = require('body-parser');

exports.index = function(req, res) {
	Footer.find(function(err, footer) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Something went wrong, Please try again.",
				errorInfo: err
			})
		}
		return res.status(200).send({
			status: "success",
			response: footer
		});
	});
};


exports.create = function(req, res) {
	Footer.create(req.body, function(err, footer) {

		if (err) {
			res.status(200).send({
				status: "error",
				message: "We can't create Footer Please try again.",
				errorInfo: err
			})
		}
		return res.status(200).send({
			status: "success",
			response: footer
		});
	});
};

exports.update = function(req, res) {
	if (req.body._id) {
		delete req.body._id;
	}
	Footer.findById(req.params.id, function(err, footer) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!footer) {
			res.status(404).send({
				status: "error",
				message: "No Footer available here.",
				errorInfo: err
			})
		}
		var updated = _.merge(footer, req.body);
		updated.save(function(err) {
			if (err) {
				res.status(200).send({
					status: "error",
					message: "Please try again.",
					errorInfo: err
				})
			}
			return res.status(200).send({
				status: "success",
				response: footer
			});
		});
	});
};


exports.delete = function(req, res) {
	Footer.findById(req.params.id, function(err, footer) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!footer) {
			res.status(404).send({
				status: "error",
				message: "No Footer available here.",
				errorInfo: err
			})
		}
		Footer.remove(function(err) {
			if (err) {
				res.status(200).send({
					status: "error",
					message: "Please try again.",
					errorInfo: err
				})
			}
			return res.status(200).send({
				status: "success",
				message: "Successfully deleted record"

			});
		});
	});
};