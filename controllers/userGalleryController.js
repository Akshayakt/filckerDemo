app.controller('userGalleryController',function ($scope,$http) {
	$scope.usersArry = [];
	$scope.user = [];
	$http.get("./assets/json/users.json").success(function(data) {
       $scope.usersArry=data;
       $scope.user=angular.forEach($scope.usersArry, function(value,key){
       	console.log(value.userName);
       	return value.userName;

       	// console.log(value);
       });
       console.log($scope.user[0]);
       // console.log($scope.usersArry);
      });
});