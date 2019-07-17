var MoneyStat = require('../models/stats');
var lodash = require('lodash');
var async = require('async');
var bodyParser = require('body-parser');

exports.index = function(req, res) {
	MoneyStat.find(function(err, stats) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Something went wrong, Please try again.",
				errorInfo: err
			})
		}
		 return res.status(200).send({
			status: "success",
			response: stats
		});
	});
};


exports.create = function(req, res) {
	MoneyStat.create(req.body, function(err, headers) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "We can't create Stats Please try again.",
				errorInfo: err
			})
		}
		return res.status(200).send({
			status: "success",
			response: stats
		});
	});
};

exports.update = function(req, res) {
	if (req.body._id) {
		delete req.body._id;
	}
	MoneyStat.findById(req.params.id, function(err, stats) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!stats) {
			res.status(404).send({
				status: "error",
				message: "No Stats available here.",
				errorInfo: err
			})
		}
		var updated = _.merge(stats, req.body);
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
				response: stats
			});
		});
	});
};


exports.delete = function(req, res) {
	MoneyStat.findById(req.params.id, function(err, stats) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!stats) {
			res.status(404).send({
				status: "error",
				message: "No Stats available here.",
				errorInfo: err
			})
		}
		MoneyStat.remove(function(err) {
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