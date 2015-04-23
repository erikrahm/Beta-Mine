// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the DataController
        .when('/data', {
            templateUrl: 'views/data.html',
            controller: 'DataController'
        });

    $locationProvider.html5Mode(true);

}]);