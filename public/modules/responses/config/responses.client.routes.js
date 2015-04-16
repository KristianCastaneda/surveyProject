'use strict';

//Setting up route
angular.module('responses').config(['$stateProvider',
	function($stateProvider) {
		// Responses state routing
		$stateProvider.
		state('listResponses', {
			url: '/responses',
			templateUrl: 'modules/responses/views/list-responses.client.view.html'
		}).
		state('viewResponses', {
			url: '/responses/view',
			templateUrl: 'modules/responses/views/view-response.client.view.html'
		}).
		state('takeSurvey', {
			url: '/responses/:surveyId',
			templateUrl: 'modules/responses/views/take-response.client.view.html'
		}).
		state('editResponse', {
			url: '/responses/:responseId',
			templateUrl: 'modules/responses/views/edit-response.client.view.html'
		});
	}
]);