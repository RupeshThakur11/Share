var Rating = require('../models/rating');
var lodash = require('lodash');
var async = require('async');
var bodyParser = require('body-parser');

exports.index = function(req, res) {
	Rating.find(function(err, ratings) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Something went wrong, Please try again.",
				errorInfo: err
			})
		}
		 return res.status(200).send({
			status: "success",
			response: ratings
		});
	});
};


exports.create = function(req, res) {
	Rating.create(req.body, function(err, ratings) {
		
		if (err) {
			res.status(200).send({
				status: "error",
				message: "We can't create Header Please try again.",
				errorInfo: err
			})
		}
		return res.status(200).send({
			status: "success",
			response: ratings
		});
	});
};

exports.update = function(req, res) {
	if (req.body._id) {
		delete req.body._id;
	}
	Rating.findById(req.params.id, function(err, ratings) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!ratings) {
			res.status(404).send({
				status: "error",
				message: "No Header available here.",
				errorInfo: err
			})
		}
		var updated = _.merge(ratings, req.body);
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
				response: ratings
			});
		});
	});
};


exports.delete = function(req, res) {
	Rating.findById(req.params.id, function(err, ratings) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!ratings) {
			res.status(404).send({
				status: "error",
				message: "No Blog available here.",
				errorInfo: err
			})
		}
		Rating.remove(function(err) {
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