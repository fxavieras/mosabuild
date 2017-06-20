angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
            templateUrl: 'views/welcome.html',
            controller: 'MainController'
        })

        .when('/login', {
            templateUrl: 'views/login.html',
        })

         .when('/signup', {
            templateUrl: 'views/signup.html',
        })

         .when('/timeline', {
            replaceUrl: 'tindex.html',
        })

        .when('/profile', {
            templateUrl: 'views/profile.html',
        })

        .when('/oops', {
            templateUrl: 'views/oops.html',
        })

        .when('/LoginService', {
            replaceUrl: 'tindex.html',
        });


    $locationProvider.html5Mode(true);

}]);

