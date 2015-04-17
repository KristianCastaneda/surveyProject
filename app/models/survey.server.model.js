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
 active: String,
 isTaken: String,
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

     question2: String, 
    answers2a: String, 
    answers2b: String, 
    answers2c: String, 
    answers2d: String,
     question3: String, 
    answers3a: String, 
    answers3b: String, 
    answers3c: String, 
    answers3d: String,
     question4: String, 
    answers4a: String, 
    answers4b: String, 
    answers4c: String, 
    answers4d: String,
     question5: String, 
    answers5a: String, 
    answers5b: String, 
    answers5c: String, 
    answers5d: String,

	user: { 
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Survey', SurveySchema);