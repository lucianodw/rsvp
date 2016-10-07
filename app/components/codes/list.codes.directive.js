
angular.module('rsvpApp')
.directive("listCodes", ['Ref', '$firebaseArray', function(Ref, $firebaseArray) {
	return {
		templateUrl: './components/codes/list.codes.template.html',
		scope: {
            codes: "=",
            removed: '='
        },
		restrict: 'E',
		controller: function($scope, Ref, $firebaseArray) {

            $scope.codes = $firebaseArray(Ref.child('codes'));
            $scope.codes.$loaded().catch();			

            $scope.removeCode = function(index) {
                $scope.codes.$remove(index).then(function(){
                    $scope.removed = true;
                }).catch();
            }
            
		}
	};
}]);