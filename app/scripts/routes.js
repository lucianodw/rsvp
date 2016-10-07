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
        templateUrl: 'scripts/codes/codes.template.html',
        controller: 'CodesCtrl'
      })
      .otherwise({redirectTo: '/'});
  }]);
