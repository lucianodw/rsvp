'use strict';
/**
 * @ngdoc overview
 * @name rsvpApp:routes
 * @description
 * # routes.js
 *
 * Configure routes for use with Angular, and apply authentication security
 */
angular.module('rsvpApp')

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/main/main.template.html',
        controller: 'MainCtrl'
      })
      .when('/codes', {
        templateUrl: 'components/codes/main.codes.template.html',
        controller: 'AdminCtrl'
      })
      .when('/rsvp', {
        templateUrl: 'components/rsvp/main.rsvp.template.html',
        controller: 'AdminCtrl'
      })
      .otherwise({redirectTo: '/'});
  }]);
