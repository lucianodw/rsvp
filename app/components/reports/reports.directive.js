
angular.module('rsvpApp')
.directive("reportTotal", function() {
  return {
      templateUrl: './components/reports/reports.total.template.html',
      restrict: 'E',
      controller: function($scope, Ref, $firebaseArray) {
        $scope.rsvp = $firebaseArray(Ref.child('rsvp'));

        $scope.rsvp.$loaded(function(){
          console.log($scope.rsvp);
          $scope.yes = _.filter($scope.rsvp, function(obj) {
              return obj.status == 'Going'
          });
          $scope.no = _.filter($scope.rsvp, function(obj) {
              return obj.status == 'Not Going';
          });
          $scope.unknown = _.filter($scope.rsvp, function(obj) {
              return obj.status == 'No Answer';
          });
        }).catch();  

        $scope.codes = $firebaseArray(Ref.child('codes'));
        $scope.codes.$loaded(function() {
          $scope.invitees = _.reduce($scope.codes, function(total, code){ return total + parseInt(code.quantity); }, 0);
        }).catch();  
    }
  };
});

angular.module('rsvpApp')
.directive("reportDrinks", function() {
  return {
    templateUrl: './components/reports/reports.drinks.template.html',
    restrict: 'E',
    controller: function($scope, Ref, $firebaseArray) {
        $scope.champagne = [];
        $scope.beer = [];
        $scope.whitewine = [];
        $scope.redwine = [];
        $scope.clearspirits = [];
        $scope.darkspirits = [];

        $scope.rsvp = $firebaseArray(Ref.child('rsvp'));

        $scope.rsvp.$loaded(function(){
          console.log($scope.rsvp);
          $scope.champagne = _.filter($scope.rsvp, function(obj) {
              return obj.drink == 'Champagne'
          });
          $scope.beer = _.filter($scope.rsvp, function(obj) {
              return obj.drink == 'Beer';
          });
          $scope.whitewine = _.filter($scope.rsvp, function(obj) {
              return obj.drink == 'White Wine';
          });
          $scope.redwine = _.filter($scope.rsvp, function(obj) {
              return obj.drink == 'Red Wine';
          });
          $scope.clearspirits = _.filter($scope.rsvp, function(obj) {
              return obj.drink == 'Clear Spirits';
          });
          $scope.darkspirits = _.filter($scope.rsvp, function(obj) {
              return obj.drink == 'Dark Spirits';
          });

          $scope.chart();
        }).catch();  

        $scope.chart = function(){

          $scope.options = {
              chart: {
                  type: 'pieChart',
                  height: 500,
                  x: function(d){return d.key;},
                  y: function(d){return d.y;},
                  showLabels: true,
                  duration: 500,
                  labelThreshold: 0.01,
                  labelSunbeamLayout: true,
                  showLegend: false
              }
        };


          $scope.data = [
              {
                  key: "Champagne",
                  y: $scope.champagne.length
              },
              {
                  key: "Beer",
                  y: $scope.beer.length
              },
              {
                  key: "White Wine",
                  y: $scope.whitewine.length
              },
              {
                  key: "Red Wine",
                  y: $scope.redwine.length
              },
              {
                  key: "Clear Spirits",
                  y: $scope.clearspirits.length
              },
              {
                  key: "Dark Spirits",
                  y: $scope.darkspirits.length
              }
          ];        


        }

    
    }
  };
});




