'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var surveys = require('../../app/controllers/surveys.server.controller');
	var responses = require('../../app/controllers/responses.server.controller');

	// Responses Routes
	app.route('/responses')
		.get(responses.list)
		.post(responses.create);
		
		
	app.route('/responses/:surveyId')
		.get(responses.read)
		.put(users.requiresLogin, responses.hasAuthorization, responses.update)
		.delete(users.requiresLogin, responses.hasAuthorization, responses.delete);

	// Finish by binding the Response middleware
	app.param('surveyId', responses.surveyByID);
};
