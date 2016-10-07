
angular.module('rsvpApp')
.directive("addCode", ['Ref', '$firebaseArray', function(Ref, $firebaseArray) {
	return {
		templateUrl: './components/codes/add.codes.template.html',
		scope: {
            saved: '='
        },
		restrict: 'E',
		controller: function($scope, Ref, $firebaseObject) {

            var newCode = function() {
                return {
                    serial: '',
                    name: '',
                    quantity: 0,
                    isValid: true
                };
            }

            $scope.codes = $firebaseArray(Ref.child('codes'));
            
            $scope.addCode = function(){ 
                if( $scope.code.serial ) {
                    $scope.codes.$add($scope.code).then(function(){
                        $scope.saved = true;
                        $scope.code = newCode();
                    }).catch();
                }
            }

            $scope.code = newCode();

		}
	};
}]);