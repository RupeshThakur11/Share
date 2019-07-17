var WeHelp = require('../models/we-help');
var lodash = require('lodash');
var async = require('async');
var bodyParser = require('body-parser');

exports.index = function(req, res) {
	WeHelp.find(function(err, wehelp) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Something went wrong, Please try again.",
				errorInfo: err
			})
		}
		 return res.status(200).send({
			status: "success",
			response: wehelp
		});
	});
};


exports.create = function(req, res) {
	WeHelp.create(req.body, function(err, wehelp) {
		
		if (err) {
			res.status(200).send({
				status: "error",
				message: "We can't create WeHelp Please try again.",
				errorInfo: err
			})
		}
		return res.status(200).send({
			status: "success",
			response: wehelp
		});
	});
};

exports.update = function(req, res) {
	if (req.body._id) {
		delete req.body._id;
	}
	WeHelp.findById(req.params.id, function(err, wehelp) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!wehelp) {
			res.status(404).send({
				status: "error",
				message: "No Content available here.",
				errorInfo: err
			})
		}
		var updated = _.merge(wehelp, req.body);
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
				response: wehelp
			});
		});
	});
};


exports.delete = function(req, res) {
	WeHelp.findById(req.params.id, function(err, wehelp) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!wehelp) {
			res.status(404).send({
				status: "error",
				message: "No Content available here.",
				errorInfo: err
			})
		}
		WeHelp.remove(function(err) {
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