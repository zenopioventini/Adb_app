//(function(){
	//"use strict"

angular.module('adbapp').controller('reviewController', ['$scope', '$mdToast', '$timeout', '$routeParams', 'LocalStorage', function ($scope, $mdToast, $timeout, $routeParams, LocalStorage){
	var r = this;
	var id = $routeParams.id;

	r.review = {};
	if (typeof id !== 'undefined' && id != "" ) {
		LocalStorage.get(id).then(function(result){
			$timeout(function (){
				r.review = result;
				if (r.review.submissionDate != "" && typeof r.review.submissionDate != 'undefined') {
					r.review.submissionDate = new Date(r.review.submissionDate);
				} else {
					console.log("r.review._id : ");
					console.log(r.review._id);
					r.review.submissionDate = new Date(r.review._id);
					console.log(r.review.submissionDate);
				}
			});
		}).catch (function (err){
			console.log(err);
		});
	}
	
	this.addReview = function(){
		r.review._id = r.review._id || "" + new Date().getTime();
		var result = LocalStorage.put(r.review);
		result.then(function(response) {
			if (response.ok) {
				//$mdToast.showSimple("Salvataggio avvenuto con successo");
				console.log("Salvataggio avvenuto con successo");
				r.review._rev = response.rev;
			} else {
				$mdToast.showSimple("Qualcosa non ha funzionato come ci si aspettava... controlla la console!!");
				console.log("Ailo??");
				console.log(response);
			}
		}).catch(function (err) {
			console.log(err);
			$mdToast.showSimple("C'è stato un errore: " + err.message);
			console.log("C'è stato un errore: " + err.message);
		});
	};
	
	this.deleteReview = function(){
		
	};
	
	this.getReview = function(){
		
	};
}]);



//});