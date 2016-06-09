//(function(){
	//"use strict"
angular.module('adbapp').controller('reviewListController', ['$mdToast', '$timeout', '$location', 'LocalStorage', function ($mdToast, $timeout, $location, LocalStorage){
	var rl = this;
	rl.reviews = [];
	LocalStorage.all().then(function (result) {
		/* questo non è molto performante anche se è quello consigliato. le possibilità sono 2:
		 * - usare angular-pouchDB che non è male ma va contemplato l'aggiornamento in caso di nuove funzionalità di pouchDB
		 * - gestire la promise manualmente alla Gerotto style
		 *  
		 */
		$timeout(function (){
			rl.reviews = result.rows;
		});
	}).catch(function (err) {
	  console.log(err);
	});
	
	rl.deleteReview = function(reviewId){
		LocalStorage.get(reviewId).then(function(result){
			LocalStorage.del(result).then(function (result) {
				LocalStorage.all().then(function (result) {
					$timeout(function (){
							rl.reviews = result.rows;
					});
				});
			});
		}).catch (function (err){
			console.log(err);
		});
	};
	
	rl.getReview = function(reviewId){
		if (typeof reviewId !== 'undefined') {
			$location.path('review/' + reviewId);
		} else {
			$location.path('review');
		}
	};
	
	this.getList = function () {
		var result = LocalStorage.all();
		result.then(function (result) {
			console.log(result);
			return [];
		}).catch(function (err) {
		  console.log(err);
		  return [];
		});
	};
}]);

//});