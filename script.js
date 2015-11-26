var app = angular.module("computer",['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/main',{
		templateUrl: 'main.html',
		controller: 'MainCtrl'
	}).
	when('/about',{
		templateUrl: 'about.html',
		controller: 'AboutCtrl'
	}).
	when('/services',{
		templateUrl: 'services.html',
		controller: 'ServiceCtrl'
	}).
	when('/contact',{
		templateUrl: 'contact.html',
		controller: 'ContactCtrl'
	}).
	otherwise({redirectTo:'/main'});
});

app.controller('MainCtrl',['$scope',function($scope){
	$scope.person = 'Marcelo Choque';
	//console.log($scope);
}]).
controller('ServiceCtrl',['$scope','$http',function($scope,$http){
	$http.get('services.json').then(function(response){
		$scope.services = response.data;
	});
}]).
controller('ContactCtrl',['$scope',function($scope){

}]).
controller('AboutCtrl',['$scope',function($scope){

}]);
