var Header = require('../models/general-settings');
var lodash = require('lodash');
var async = require('async');
var bodyParser = require('body-parser');

exports.index = function(req, res) {
	Header.find(function(err, headers) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Something went wrong, Please try again.",
				errorInfo: err
			})
		}
		 return res.status(200).send({
			status: "success",
			response: headers
		});
	});
};


exports.create = function(req, res) {
	Header.create(req.body, function(err, headers) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "We can't create Header Please try again.",
				errorInfo: err
			})
		}
		return res.status(200).send({
			status: "success",
			response: headers
		});
	});
};

exports.update = function(req, res) {
	if (req.body._id) {
		delete req.body._id;
	}
	Header.findById(req.params.id, function(err, headers) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!headers) {
			res.status(404).send({
				status: "error",
				message: "No Header available here.",
				errorInfo: err
			})
		}
		var updated = _.merge(headers, req.body);
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
				response: headers
			});
		});
	});
};


exports.delete = function(req, res) {
	Header.findById(req.params.id, function(err, headers) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!headers) {
			res.status(404).send({
				status: "error",
				message: "No Header available here.",
				errorInfo: err
			})
		}
		Header.remove(function(err) {
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