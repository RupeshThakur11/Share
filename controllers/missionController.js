var Mission = require('../models/mission');
var lodash = require('lodash');
var async = require('async');
var bodyParser = require('body-parser');

exports.index = function(req, res) {
	Mission.find(function(err, missions) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Something went wrong, Please try again.",
				errorInfo: err
			})
		}
		 return res.status(200).send({
			status: "success",
			response: missions
		});
	});
};


exports.create = function(req, res) {
	Mission.create(req.body, function(err, missions) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "We can't create Mission Please try again.",
				errorInfo: err
			})
		}
		return res.status(200).send({
			status: "success",
			response: missions
		});
	});
};

exports.update = function(req, res) {
	if (req.body._id) {
		delete req.body._id;
	}
	Mission.findById(req.params.id, function(err, missions) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!missions) {
			res.status(404).send({
				status: "error",
				message: "No Mission available here.",
				errorInfo: err
			})
		}
		var updated = _.merge(missions, req.body);
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
				response: missions
			});
		});
	});
};


exports.delete = function(req, res) {
	Mission.findById(req.params.id, function(err, missions) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!missions) {
			res.status(404).send({
				status: "error",
				message: "No Mission available here.",
				errorInfo: err
			})
		}
		Mission.remove(function(err) {
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
	Mission.findById(req.params.id, function(err, missions) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Something went wrong, Please try again.",
				errorInfo: err
			})
		}
		if (!missions) {
			return res.status(404).end();
		}
		return res.status(200).send({
			status: "success",
			response:  missions
		});
	});
};