var app = angular.module("flickerApp",['ngRoute']);
 
 app.config(function ($routeProvider) {
 	
		$routeProvider
			.when('/users',{
				templateUrl:  './views/partials/users.html',
				controller: 'usersController'
			})
			.when('/{{user.userName}}',{
				templateUrl:  './views/partials/userGallery.html',
				controller: 'userGalleryController'
			})
			.otherwise({
        		redirectTo: '/index.html'
      		});
			
});
