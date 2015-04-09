'use strict';

// Surveys controller
angular.module('surveys').controller('SurveysController', ['$scope', '$stateParams', '$location', 'Authentication', 'Surveys',
	function($scope, $stateParams, $location, Authentication, Surveys) {
		$scope.authentication = Authentication;

		// Create new Survey
		$scope.create = function() {
			// Create new Survey object
			var survey = new Surveys ({
				title: this.title,
                desc: this.desc,
                expiryDate: this.expiryDate,
                question1: this.question1,
                answers1a:this.answers1a,answers1b:this.answers1b,answers1c:this.answers1c,answers1d:this.answers1d,
                question2: this.question2,
                answers2a:this.answers2a,answers2b:this.answers2b,answers2c:this.answers2c,answers2d:this.answers2d,
                question3: this.question3,
                answers3a:this.answers3a,answers3b:this.answers3b,answers3c:this.answers3c,answers3d:this.answers3d,
                question4: this.question4,
                answers4a:this.answers4a,answers4b:this.answers4b,answers4c:this.answers4c,answers4d:this.answers4d
			});

			// Redirect after save
			survey.$save(function(response) {
				$location.path('surveys/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Survey
		$scope.remove = function(survey) {
			if ( survey ) { 
				survey.$remove();

				for (var i in $scope.surveys) {
					if ($scope.surveys [i] === survey) {
						$scope.surveys.splice(i, 1);
					}
				}
			} else {
				$scope.survey.$remove(function() {
					$location.path('surveys');
				});
			}
		};

		// Update existing Survey
		$scope.update = function() {
			var survey = $scope.survey;

			survey.$update(function() {
				$location.path('surveys/' + survey._id);
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