'use strict';
/**
 * @ngdoc function
 * @name rsvpApp.controller:CodesCtrl
 * @description
 * # CodesCtrl
 * Home Screen - Checks if entered code matches in database
 */
angular.module('rsvpApp')
  .controller('AdminCtrl', function ($scope, Ref, $firebaseArray) {

    // ----- Code Lookup Component ------
    $scope.user = {
      isValidCode: false,
      details: {}
    }

    // ----- Add Code Component ------
    $scope.message = {
      code: {
        saved: false,
        removed: false
      },
      rsvp: {
        saved: false,
        removed: false
      }
    }

    // ----- List Code Component ------
    $scope.codes = [];
    $scope.rsvp = [];

  });
