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
				title: $scope.survey.title,
				question1: $scope.survey.question1,
				answers: this.answers
				,
				question2: $scope.survey.question2,
				answers2: this.answers2,
				question3: $scope.survey.question3,
				answers3: this.answers3,
				question4: $scope.survey.question4,
				answers4: this.answers4,
				question5: $scope.survey.question5,
				answers5: this.answers5
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


    $scope.isActive = function(survey) {
    	var surveys = $scope.surveys;
        for(var i=0; i < surveys.length; i++){
            return surveys[0].active === "true";    
        }

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
		
		
	// Find a list of Surveys
		$scope.findSurveys = function() {
			$scope.surveys = Surveys.query();
		};
		
			// Find existing Survey
		$scope.findOne = function() {
			$scope.response = Responses.get({ 
				responseId: $stateParams.responseId
			});
		};
		
		// Find existing Survey
		$scope.findOneSurvey = function() {
			$scope.survey = Surveys.get({ 
				surveyId: $stateParams.surveyId
			});
		};
	}
]);