//Sync
function add(x,y){
	console.log("returning result");
	return x + y;
}

function usingAdd(x,y){
	var result = add(x,y);
	console.log("result = ", result);
}

//*****************************************
//Async - Callbacks
function addAsync(x,y, onResult){
	setTimeout(function(){
		console.log("returning result");
		var result = x + y;
		if (onResult) onResult(result);
	},5000);
}

function usingAddAsync(x,y){
	addAsync(x,y, function(result){
		console.log("result = ", result);
	});
}

//*****************************************
//Assync - Events
var adder = (function(){
	var callbacks = [];
	return {
		addCallback : function(callback){
			callbacks.push(callback);
		},
		add : function(x,y){
			setTimeout(function(){
				console.log("returning result");
				var result = x + y;
				callbacks.forEach(function(cb){
					cb(result);
				});
			}, 5000);
		}
	}
})();

adder.addCallback(function(result){
	console.log("result = ", result);
});
adder.add(100,200);

//*********************************************
function add(x,y){
	var promise = new Promise(function(resolve, reject){
		setTimeout(function(){
			console.log("returning result");
			var result = x + y;
			resolve(result);
		},5000);
	});
	return promise;
}

var promise = add(100,200);
promise.then(function(result)){
	console.log("result = ", result);
});


//Using defered
//Fictious Defer() Class
function Defer(){

}
function add(x,y){
	var deferred = new Defer();
	setTimeout(function(){
		var result = x + y;
		deferred.resolve(result);
	}, 5000);
	return deferred.promise;
}
