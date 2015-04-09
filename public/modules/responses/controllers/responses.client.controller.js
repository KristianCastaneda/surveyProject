'use strict';

// Responses controller
angular.module('responses').controller('ResponsesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Responses',
	function($scope, $stateParams, $location, Authentication, Responses) {
		$scope.authentication = Authentication;

		// Create new Response
		$scope.create = function() {
			// Create new Response object
			var response = new Responses ({
				question1 : this.question1,
                response1 : this.response1,
                question2 : this.question2,
                response2 : this.response2,
                question3 : this.question3,
                response3 : this.response3,
                question4 : this.question4,
                response4 : this.response4
			});

			// Redirect after save
			response.$save(function(response) {
				$location.path('responses/' + response._id);

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

		// Find a list of Responses
		$scope.find = function() {
			$scope.responses = Responses.query();
		};

		// Find existing Response
		$scope.findOne = function() {
			$scope.response = Responses.get({ 
				responseId: $stateParams.responseId
			});
		};
	}
]);