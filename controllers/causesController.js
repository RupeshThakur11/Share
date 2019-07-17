var Cause = require('../models/causes');
var lodash = require('lodash');
var async = require('async');
var bodyParser = require('body-parser');

exports.index = function(req, res) {
	Cause.find(function(err, causes) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Something went wrong, Please try again.",
				errorInfo: err
			})
		}
		 return res.status(200).send({
			status: "success",
			response: causes
		});
	});
};


exports.create = function(req, res) {
	Cause.create(req.body, function(err, causes) {
		
		if (err) {
			res.status(200).send({
				status: "error",
				message: "We can't create Cause Please try again.",
				errorInfo: err
			})
		}
		return res.status(200).send({
			status: "success",
			response: causes
		});
	});
};

exports.update = function(req, res) {
	if (req.body._id) {
		delete req.body._id;
	}
	Cause.findById(req.params.id, function(err, causes) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!causes) {
			res.status(404).send({
				status: "error",
				message: "No Cause available here.",
				errorInfo: err
			})
		}
		var updated = _.merge(causes, req.body);
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
				response: causes
			});
		});
	});
};


exports.delete = function(req, res) {
	Cause.findById(req.params.id, function(err, causes) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!causes) {
			res.status(404).send({
				status: "error",
				message: "No Cause available here.",
				errorInfo: err
			})
		}
		Cause.remove(function(err) {
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

exports.show = function(req, res) {
	Cause.findById(req.params.id, function(err, causes) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Something went wrong, Please try again.",
				errorInfo: err
			})
		}
		if (!causes) {
			return res.status(404).end();
		}
		return res.status(200).send({
			status: "success",
			response: causes
		});
	});
};