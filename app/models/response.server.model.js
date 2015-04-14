'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Response Schema
 */
var ResponseSchema = new Schema({
	question1: String,
    answers: String,
    surveyID:  String,
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Response', ResponseSchema);