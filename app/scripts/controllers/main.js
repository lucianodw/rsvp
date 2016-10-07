'use strict';

/**
 * @ngdoc function
 * @name rsvpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rsvpApp
 */
angular.module('rsvpApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
