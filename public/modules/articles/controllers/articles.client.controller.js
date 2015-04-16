'use strict';

angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles', 'Surveys', 'Responses',
	function($scope, $stateParams, $location, Authentication, Articles, Surveys, Responses) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var article = new Articles({
				title: this.title,
				content: this.content
			});
			article.$save(function(response) {
				$location.path('articles/' + response._id);

				$scope.title = '';
				$scope.content = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.remove = function(article) {
			if (article) {
				article.$remove();

				for (var i in $scope.articles) {
					if ($scope.articles[i] === article) {
						$scope.articles.splice(i, 1);
					}
				}
			} else {
				$scope.article.$remove(function() {
					$location.path('articles');
				});
			}
		};

		$scope.update = function() {
			var article = $scope.article;

			article.$update(function() {
				$location.path('articles/' + article._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.findTakenSurveys = function() {
	
			var surveys = Responses.query();
			var responsesOuter = Responses.query();
			var responsesInner = Responses.query();
			
			var uniqResponses =[];
			var numberOfUniqueResponses=0;
			var survID='ppp';
			var readingCode;
			var parseTry = responsesOuter.parse();
					var lengthOuter = parseTry.length;
			var lengthOuter1 = responsesOuter.douments.length;
			for (var i = 0; i < responsesOuter.length; i++) {
 				 survID = responsesOuter[i].surveyID;
 				 readingCode = 'read this code';
 				for (var j = 0; j <responsesInner.length; j++) {
 					if(survID === responsesInner[j].surveyID)
 					{
 						numberOfUniqueResponses++;
 					}
				}
			}
			
                
            $scope.articles = Responses.query() ;
			$scope.numberOfUniqueResponses=lengthOuter;
		};

		$scope.findOne = function() {
			$scope.article = Articles.get({
				articleId: $stateParams.articleId
			});
		};
	}
]);