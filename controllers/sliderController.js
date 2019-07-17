var Slider = require('../models/slider');
var lodash = require('lodash');
var async = require('async');
var bodyParser = require('body-parser');

exports.index = function(req, res) {
	Slider.find(function(err, sliders) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Something went wrong, Please try again.",
				errorInfo: err
			})
		}
		 return res.status(200).send({
			status: "success",
			response: sliders
		});
	});
};


exports.create = function(req, res) {
	Slider.create(req.body, function(err, sliders) {
		
		if (err) {
			res.status(200).send({
				status: "error",
				message: "We can't create Slider Please try again.",
				errorInfo: err
			})
		}
		return res.status(200).send({
			status: "success",
			response: sliders
		});
	});
};

exports.update = function(req, res) {
	if (req.body._id) {
		delete req.body._id;
	}
	Slider.findById(req.params.id, function(err, sliders) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!sliders) {
			res.status(404).send({
				status: "error",
				message: "No Slider available here.",
				errorInfo: err
			})
		}
		var updated = _.merge(sliders, req.body);
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
				response: sliders
			});
		});
	});
};


exports.delete = function(req, res) {
	Slider.findById(req.params.id, function(err, sliders) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!sliders) {
			res.status(404).send({
				status: "error",
				message: "No Blog available here.",
				errorInfo: err
			})
		}
		Slider.remove(function(err) {
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