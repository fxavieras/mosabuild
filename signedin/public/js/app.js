angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl']);

(function() {

    'use strict';

    angular
        .module('myApp', ['auth0.lock', 'angular-jwt', 'ngRoute'])
        .config(function($routeProvider, lockProvider) {

            lockProvider.init({
                clientID: 'ZPRYBHg5gDjKbh8YHIRXKVXOhS3gNXT7',
                domain: 'mosaikken.auth0.com'
            });

            $routeProvider
                .when( '/', {
                    controller: 'homeController',
                    templateUrl: 'components/home/home.html'
                })
                .when( '/login', {
                    controller: 'loginController',
                    templateUrl: 'components/login/login.html'
                })
                .when( '/tindex.html', {
                    controller: 'mainController',
                    location: '../public/tindex.html'
                });
        });

})();



//, 'MainCtrl', 'MainService', 'LoginCtrl', 'LoginService', 'SignupCtrl', 'SignupService'

angular.module('mainApp', ['ngRoute', 'appRoutes', 'MainCtrl']);

(function() {

    'use strict';

    angular
        .module('myApp', ['auth0.lock', 'angular-jwt', 'ngRoute'])
        .config(function($routeProvider, lockProvider) {

            lockProvider.init({
                clientID: 'ZPRYBHg5gDjKbh8YHIRXKVXOhS3gNXT7',
                domain: 'mosaikken.auth0.com'
            });

            $routeProvider
                .when( '/', {
                    controller: 'homeController',
                    templateUrl: 'components/home/home.html'
                })
                .when( '/login', {
                    controller: 'loginController',
                    templateUrl: 'components/login/login.html'
                })
                .when( '/tindex.html', {
                    controller: 'mainController',
                    location: '../public/tindex.html'
                });
        });

})();



//, 'MainCtrl', 'MainService', 'LoginCtrl', 'LoginService', 'SignupCtrl', 'SignupService'