'use strict';

// Declare app level module which depends on views, and components
angular.module('myFacebook', [
  'ngRoute',
  'myFacebook.view1',
  'myFacebook.view2',
  'myFacebook.facebook'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/facebook'});
}]);
	