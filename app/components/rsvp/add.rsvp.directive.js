
angular.module('rsvpApp')
.directive("addRsvp", ['Ref', '$firebaseArray', function(Ref, $firebaseArray) {
	return {
		templateUrl: './components/rsvp/add.rsvp.template.html',
		scope: { 
            code: '='
        },
        restrict: 'E',
        controller: function($scope, Ref, $firebaseObject) {
            $scope.screen = {
                drink: [false, false],
                saved: [true, true]
            }

            $scope.breakpoints = [
                {
                    breakpoint: 480,
                    settings: "unslick"
                }        
            ];

            var newUser = function() {
                return {
                    name: '',
                    email: '',
                    drink: '',
                    code: $scope.code.serial,
                    status: 'No Answer'
                };
            }

            $scope.rsvp = $firebaseArray(Ref.child('rsvp'));
            
            $scope.addRsvp = function(index, type){ 
                console.log(index);
                console.log(type);
                console.log($scope.attendees);
                $scope.attendees[index].status = type || $scope.attendees[index].status;

                if( $scope.attendees[index].name || $scope.attendees[index].status == 'Not Going') {
                        console.log('just saving');
                        $scope.screen.saved[index] = true;
                         $scope.attendees.$save($scope.attendees[index]);
                }
            }

            $scope.setDrink = function(index, drinkType){ 
                $scope.attendees[index].drink = drinkType;
                $scope.screen.saved[index] = false;
                $scope.toggleDrinkScreen(index);
            }

            $scope.toggleDrinkScreen = function(index) {
                    $scope.screen.drink[index] =  !$scope.screen.drink[index] ;
            }

            console.log('serial: ', $scope.code.serial);
            $scope.attendees = $firebaseArray(Ref.child('rsvp').orderByChild("code").equalTo($scope.code.serial));
            $scope.attendees.$loaded(function(data) {
                console.log('total data', data.length);

                var newLen = parseInt($scope.code.quantity - data.length);
                for(var i = 0; i < newLen; i++) {
                    $scope.screen.saved[i] = false;
                    $scope.attendees.$add(newUser());
                }

            }).catch(); 


            // var len = parseInt($scope.code.quantity);
            // for(var i = 0; i < len; i++) {
            //     $scope.attendees.push(newUser());
            // }
            
        }
    };
}]);