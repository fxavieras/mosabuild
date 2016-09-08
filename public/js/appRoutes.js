angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/login', {
            templateUrl: 'views/login.html',
        })

         .when('/signup', {
            templateUrl: 'views/signup.html',
        })

        .when('/timeline', {
            templateUrl: 'views/timline.html',
        })

        .when('/profile', {
            templateUrl: 'views/profile.html',
        })

        .when('/oops', {
            templateUrl: 'views/oops.html',
        })

        .when('/LoginService', {
            templateUrl: 'views/timeline.html',
        });


    $locationProvider.html5Mode(true);

}]);

