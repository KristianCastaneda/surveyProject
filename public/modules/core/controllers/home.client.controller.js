'use strict';

/*
File name:  home.client.controller.js,
Authors’ Names: Liliya Artyukh, Mohammed Summon, Kristian Castaneda,
Website Name: Survey KLM,
File Description: controller for home page
*/


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	}
]);