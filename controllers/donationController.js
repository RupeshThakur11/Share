var Donation = require('../models/donation');
var lodash = require('lodash');
var async = require('async');
var bodyParser = require('body-parser');

exports.index = function(req, res) {
	Donation.find(function(err, donation) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Something went wrong, Please try again.",
				errorInfo: err
			})
		}
		return res.status(200).send({
			status: "success",
			response: donation
		});
	});
};


exports.create = function(req, res) {
	Donation.create(req.body, function(err, donation) {

		if (err) {
			res.status(200).send({
				status: "error",
				message: "We can't create Donation Please try again.",
				errorInfo: err
			})
		}
		return res.status(200).send({
			status: "success",
			response: donation
		});
	});
};

exports.update = function(req, res) {
	if (req.body._id) {
		delete req.body._id;
	}
	Donation.findById(req.params.id, function(err, donation) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!donation) {
			res.status(404).send({
				status: "error",
				message: "No Donation available here.",
				errorInfo: err
			})
		}
		var updated = _.merge(donation, req.body);
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
				response: donation
			});
		});
	});
};


exports.delete = function(req, res) {
	Donation.findById(req.params.id, function(err, donation) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!donation) {
			res.status(404).send({
				status: "error",
				message: "No Donation available here.",
				errorInfo: err
			})
		}
		Donation.remove(function(err) {
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