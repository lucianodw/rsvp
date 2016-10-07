
angular.module('rsvpApp')
.directive("codeLookup", ['Ref', '$firebaseArray', function(Ref, $firebaseArray) {
	return {
		templateUrl: './components/lookup/lookup.template.html',
		scope: {
			valid: '=',
			details: '=',
		},
		restrict: 'E',
		controller: function($scope, Ref, $firebaseArray, $timeout) {
      		$scope.code = '';
			$scope.badCode = false;
			$scope.loading = false;
			$scope.checkmark = false;

			$scope.lookup = function() {
				$scope.code = $scope.code.toUpperCase();
				$scope.loading = true;
				$timeout(function(){
					if($scope.code) {
						$scope.user = $firebaseArray( Ref.child('codes').orderByChild('serial').equalTo($scope.code) );
						$scope.badCode = false;
						$scope.user.$loaded(function(){
							console.log('$scope.user', $scope.user[0]);
							$scope.loading = false;
							if($scope.user[0] && $scope.user[0].isValid) {
								$scope.checkmark = true;

								$timeout(function(){
									$scope.valid = true;
									$scope.details = $scope.user[0];
									console.log($scope.details);
								}, 2000);

							} else {
								$scope.loading = false;
								$scope.badCode = true;
							}
						}).catch();					  
					} 
				}, 1000);
			}
			  
		}
	};
}]);
