app.controller('usersController',function ($scope,$http) {
	$scope.usersArry = [];
	$http.get("./assets/json/users.json").success(function(data) {
       $scope.usersArry=data;
       console.log($scope.usersArry);
      });
});