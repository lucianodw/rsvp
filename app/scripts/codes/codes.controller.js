'use strict';
/**
 * @ngdoc function
 * @name rsvpApp.controller:CodesCtrl
 * @description
 * # CodesCtrl
 * Home Screen - Checks if entered code matches in database
 */
angular.module('rsvpApp')
  .controller('CodesCtrl', function ($scope, Ref, $firebaseArray) {
    // synchronize a read-only, synchronized array of messages, limit to most recent 10
    $scope.codes = $firebaseArray(Ref.child('codes').limitToLast(10));

    // display any errors
    $scope.codes.$loaded(function(){
        
    }).catch();

    // Initialize 
    $scope.userCode = '';

    // provide a method for adding a message
    // $scope.addMessage = function(newMessage) {
    //   if( newMessage ) {
    //     // push a message to the end of the array
    //     $scope.messages.$add({text: newMessage})
    //       // display any errors
    //       .catch(alert);
    //   }
    // };

  });
