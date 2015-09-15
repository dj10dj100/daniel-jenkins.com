var app = app || {},
    angular = angular.module("siteApp", []);


angular.controller('HomePageController', ['$scope', function($scope) {

	$scope.navOpen = false;

	$scope.navigation = function(){

		$scope.navOpen = !$scope.navOpen;
	}

}]);