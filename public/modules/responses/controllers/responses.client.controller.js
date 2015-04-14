'use strict';

// Responses controller
angular.module('responses').controller('ResponsesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Responses', 'Surveys',
	function($scope, $stateParams, $location, Authentication, Responses, Surveys) {
		$scope.authentication = Authentication;

		// Create new Response
		$scope.create = function() {
			// Create new Response object
			var response = new Responses ({
				surveyID: $scope.survey._id,
				question1: $scope.survey.question1,
				answers: this.answers
			});

			// Redirect after save
			response.$save(function(response) {
				$location.path('responses/view');

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Response
		$scope.remove = function(response) {
			if ( response ) { 
				response.$remove();

				for (var i in $scope.responses) {
					if ($scope.responses [i] === response) {
						$scope.responses.splice(i, 1);
					}
				}
			} else {
				$scope.response.$remove(function() {
					$location.path('responses');
				});
			}
		};

		// Update existing Response
		$scope.update = function() {
			var response = $scope.response;

			response.$update(function() {
				$location.path('responses/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};


	// Find a list of Surveys
		$scope.find = function() {
			$scope.surveys = Surveys.query();
		};
		
		
		// Find existing Survey
		$scope.findOne = function() {
			$scope.survey = Surveys.get({ 
				surveyId: $stateParams.surveyId
			});
		};
	}
]);