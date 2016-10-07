
angular.module('rsvpApp')
.directive("listRsvp", ['Ref', '$firebaseArray', function(Ref, $firebaseArray) {
	return {
		templateUrl: './components/rsvp/list.rsvp.template.html',
		scope: { 
			removed: '=',
			rsvp: '='
		},
		restrict: 'E',
		controller: function($scope, Ref, $firebaseObject) {
            $scope.rsvp = $firebaseArray(Ref.child('rsvp'));
            $scope.rsvp.$loaded().catch();			

            $scope.screen = {
            	delete: false
            }

            $scope.removeRsvp = function(index) {
                $scope.rsvp.$remove(index).then(function(){
                    $scope.removed = true;
                }).catch();
            }
            

		}
	};
}]);