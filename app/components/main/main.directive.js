
angular.module('rsvpApp')
.directive("imgVideo", function() {
  return {
    template: '<span class="img-video"><img src="{{image}}" /></span>',
    scope: { 
            image: '=',
            video: '='
        },
        restrict: 'E',
        controller: function($scope) {
           if($(window).width() > 992) {
            $('.img-video').html(' <video id="bgVideo" autoplay loop muted> <source src="'+$scope.video+'" type="video/mp4" /> </video>') 
           }
      }
  };
});

angular.module('rsvpApp')
.directive("randomQuote", function() {
  return {
    template: '{{quote}}',
    restrict: 'E',
    controller: function($scope) {
      $scope.quotes = [
        '“So we beat on, boats against the current, borne back ceaselessly into the past.”',
        '"And I like large parties. They’re so intimate. At small parties there isn’t any privacy."',
        '"Let us learn to show our friendship for a man when he is alive and not after he is dead."',
        '"Can’t repeat the past?…Why of course you can!"'
      ];

      console.log(Math.round(Math.random()*$scope.quotes.length) - 1);
      $scope.quote = $scope.quotes[Math.round(Math.random()*$scope.quotes.length)]
  }
  };
});




