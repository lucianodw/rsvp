'use strict';

angular.module('rsvpApp')
  .controller('MainCtrl', function ($scope, Ref, $firebaseArray) {

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

    // ----- Image  / Video Settings ------
    $scope.imgPath = 'images/bg.jpg';
    $scope.videoPath = 'videos/main.mp4';


  });
