var Blog = require('../models/blog');
var lodash = require('lodash');
var async = require('async');
var bodyParser = require('body-parser');

exports.index = function(req, res) {
	Blog.find(function(err, blogs) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Something went wrong, Please try again.",
				errorInfo: err
			})
		}
		return res.status(200).send({
			status: "success",
			response: blogs
		});
	});
};


exports.create = function(req, res) {
	Blog.create(req.body, function(err, blogs) {

		if (err) {
			res.status(200).send({
				status: "error",
				message: "We can't create Blog Please try again.",
				errorInfo: err
			})
		}
		return res.status(200).send({
			status: "success",
			response: blogs
		});
	});
};

exports.update = function(req, res) {
	if (req.body._id) {
		delete req.body._id;
	}
	Blog.findById(req.params.id, function(err, blogs) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!blogs) {
			res.status(404).send({
				status: "error",
				message: "No Blog available here.",
				errorInfo: err
			})
		}
		var updated = _.merge(blogs, req.body);
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
				response: blogs
			});
		});
	});
};


exports.delete = function(req, res) {
	Blog.findById(req.params.id, function(err, blogs) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Please try again.",
				errorInfo: err
			})
		}
		if (!blogs) {
			res.status(404).send({
				status: "error",
				message: "No Blog available here.",
				errorInfo: err
			})
		}
		Blog.remove(function(err) {
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
	Blog.findById(req.params.id, function(err, blogs) {
		if (err) {
			res.status(200).send({
				status: "error",
				message: "Something went wrong, Please try again.",
				errorInfo: err
			})
		}
		if (!blogs) {
			return res.status(404).end();
		}
		return res.status(200).send({
			status: "success",
			response: blogs
		});
	});
};

