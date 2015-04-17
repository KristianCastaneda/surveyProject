'use strict';


/*
File name:  core.client.routes.js,
Authors’ Names: Liliya Artyukh, Mohammed Summon, Kristian Castaneda,
Website Name: Survey KLM,
File Description: routes for core module
*/


// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		});
	}
]);