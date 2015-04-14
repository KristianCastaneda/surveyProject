'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Survey Schema
 */
var SurveySchema = new Schema({
	title: {
		type: String,
		default: '',
		required: 'Please fill Survey name',
		trim: true
	},
    desc : String,
	created: {
		type: Date,
		default: Date.now
	},

    question1: String, 
    answers1a: String, 
    answers1b: String, 
    answers1c: String, 
    answers1d: String,
	user: { 
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Survey', SurveySchema);