var Testimonial = require('../models/testimonial');
var lodash = require('lodash');
var async = require('async');
var bodyParser = require('body-parser');

exports.index = function(req, res) {
	Testimonial.find(function(err, testimonials) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Something went wrong, Please try again.",
				errorInfo: err
			})
		}
		 return res.status(200).send({
			status: "success",
			response: testimonials
		});
	});
};


exports.create = function(req, res) {
	Testimonial.create(req.body, function(err, testimonials) {
		
		if (err) {
			res.status(200).send({
				status: "error",
				message: "We can't create Testimonial Please try again.",
				errorInfo: err
			})
		}
		return res.status(200).send({
			status: "success",
			response: testimonials
		});
	});
};

exports.update = function(req, res) {
	if (req.body._id) {
		delete req.body._id;
	}
	Testimonial.findById(req.params.id, function(err, testimonials) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!testimonials) {
			res.status(404).send({
				status: "error",
				message: "No Testimonial available here.",
				errorInfo: err
			})
		}
		var updated = _.merge(testimonials, req.body);
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
				response: testimonials
			});
		});
	});
};


exports.delete = function(req, res) {
	Testimonial.findById(req.params.id, function(err, testimonials) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!testimonials) {
			res.status(404).send({
				status: "error",
				message: "No Testimonial available here.",
				errorInfo: err
			})
		}
		Testimonial.remove(function(err) {
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
	Testimonial.findById(req.params.id, function(err, testimonials) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Something went wrong, Please try again.",
				errorInfo: err
			})
		}
		if (!testimonials) {
			return res.status(404).end();
		}
		return res.status(200).send({
			status: "success",
			response: testimonials
		});
	});
};