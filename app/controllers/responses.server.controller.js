'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Response = mongoose.model('Response'),
	Survey = mongoose.model('Survey'),
	_ = require('lodash');

/**
 * Create a Response
 */
exports.create = function(req, res) {
	var response = new Response(req.body);
	response.user = req.user;
	response.survey = req.survey;

	response.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(response);
		}
	});
};

/**
 * Show the current Response
 */
exports.read = function(req, res) {
	res.jsonp(req.survey);
};

/**
 * Update a Response
 */
exports.update = function(req, res) {
	var response = req.response ;

	response = _.extend(response , req.body);

	response.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(response);
		}
	});
};

/**
 * Delete an Response
 */
exports.delete = function(req, res) {
	var response = req.response ;

	response.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(response);
		}
	});
};




/**
 * List of Responses
*/
exports.list = function(req, res) { 
	Response.find().sort('-created').populate('user', 'displayName').exec(function(err, responses) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(responses);
		}
	});
};

 
 
/**
 * Response middleware
*/
 
exports.surveyByID = function(req, res, next, id) { 
	Survey.findById(id).populate('user', 'displayName').exec(function(err, survey) {
		if (err) return next(err);
		if (! survey) return next(new Error('Failed to load Survey ' + id));
		req.survey = survey ;
		next();
	});
};

 
 
/*
 * *
 * Response authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.response.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};
