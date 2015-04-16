'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var surveys = require('../../app/controllers/surveys.server.controller');
		console.log('came to the server route ----------------- ');
	// Surveys Routes
	app.route('/surveys')
		.get(surveys.list)//gets request from user and calls .list command at controller 
		.post(users.requiresLogin, surveys.create);

	app.route('/surveys/:surveyId')
		.get(surveys.read)//gets request from user and calls .read command at controller -- but first sets the id
		.put(users.requiresLogin, surveys.hasAuthorization, surveys.update)
		.delete(users.requiresLogin, surveys.hasAuthorization, surveys.delete);

	// Finish by binding the Survey middleware
	app.param('surveyId', surveys.surveyByID);
};
