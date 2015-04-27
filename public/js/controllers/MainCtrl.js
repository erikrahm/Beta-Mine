// public/js/controllers/MainCtrl.js

angular.module('MainCtrl', []).controller('MainController', ['$scope', '$location', function($scope, $location) {

		$scope.scrape = function(partner) {
			$location.path('/search/' + partner.name);
		};

		/*
			$http.get('../../../app/sites.js').success(function(partnerSearch){    
				$scope.scrape = function(partner) {
					partnerSearch(partner);
				};
			});
		*/

}]);
