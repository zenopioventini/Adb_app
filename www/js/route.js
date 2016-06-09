angular.module('adbapp').config(function($routeProvider){
	$routeProvider.when('/', {redirectTo: '/reviews'})
	.when('/reviews',{templateUrl:'templates/templateStandard.html', contentPage:'templates/pages/review/index.html', toolbar:{ menuButton: true, backButton: false, settingButton: false}})
	.when('/review',{templateUrl:'templates/templateStandard.html', contentPage:'templates/pages/review/edit.html', toolbar:{ menuButton: true, backButton: true, settingButton: true}})
	.when('/review/:id',{templateUrl:'templates/templateStandard.html', contentPage:'templates/pages/review/edit.html', toolbar:{ menuButton: true, backButton: true, settingButton: true}})
	.otherwise({redirectTo: '/'});
});