//(function(){
//	"use strict"
	angular.module('adbapp').controller('standardTemplateController', ['$route', '$window', '$mdSidenav', '$location', function($route,$window,$mdSidenav,$location){
		var st = this;
		function goToBack () {
			$window.history.back();
		}
		function toggleLeftMenu () {
		    $mdSidenav('left').toggle();
		}
		function goTo (path) {
			$location.path(path);
		}
		st.content = $route.current.contentPage;
		st.menuButton = $route.current.toolbar.menuButton;
		st.settingButton = $route.current.toolbar.settingButton;
		st.backButton = $route.current.toolbar.backButton;
		st.goToBack = goToBack;
		st.toggleLeftMenu = toggleLeftMenu;
		st.goTo = goTo;
		st.current = $route.current;
	}]);
//});