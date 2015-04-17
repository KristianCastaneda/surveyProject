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
 
    question2: String,
    answers2: String,
    question3: String,
    answers3: String,
    question4: String,
    answers4: String,
    question5: String,
    answers5: String,

    title: String,
    surveyID:  String,
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Response', ResponseSchema);