angular.module('adbapp')
.factory("LocalStorage", function LocalStorageFactory(){
	var db = null;
	function load(){
		if (db == null) {
			db = new PouchDB('adbappDB');
		}
	}
	function put(doc) {
		var theResult = null;
		if (db == null) {
			console.log("Db non inizializzato!");
			return theResult;
		} else {
			return db.put(doc);
		}
	}
	function all() {
		var theResult=[];
		if (db == null) {
			console.log("Db non inizializzato!");
			return theResult;
		} else {
			return db.allDocs({include_docs: true});
		}
	}
	function get(id){
		 var theDoc = {};
		 if (db == null) {
			console.log("Db non inizializzato!");
			return theDoc;
		 }
		 return db.get(id);
	}
	function del(doc){
		 if (db == null) {
			console.log("Db non inizializzato!");
			return false;
		 }
		 return db.remove(doc);		
	}
	
	return {
		load : load,
		put : put,
		all : all,
		get : get,
		del : del
	};
});

/*
 * Gerotto- style
 * 
 * angular.module('adbapp')
.factory("LocalStorage", [ '$q' ,function LocalStorageFactory( $q ){
	var db = null;
	
	return {
		load : function(){
			if (db == null) {
				db = new PouchDB('adbappDB');
			}
		},
		put : function(doc) {
			var theResult = null;
			if (db == null) {
				console.log("Db non inizializzato!");
				return theResult;
			} else {
				return db.put(doc);
			}
		},
		all: function() {
			var defer = $q.defer();
			
			if (db == null) {
				console.log("Db non inizializzato!");
				return defer.reject();
			} else {
				
				db.allDocs({include_docs: true}).then(
				function (result) {
					defer.resolve(result.rows);
				}, 
				function ( result) {
					defer.reject(result);
				});
				
				
			}
			return defer.promise;
			
		},
		get: function(id){
			 var theDoc;
			 db.get(id).then(function (doc) {
				  // handle doc
					theDoc = doc;
				}).catch(function (err) {
					theDoc = err;
				});
			 return theDoc;
		}
	};
}]);
 * 
 */