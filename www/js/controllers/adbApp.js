angular.module('adbapp').controller('adbAppController', ['LocalStorage', function (LocalStorage){
	LocalStorage.load();
}]);