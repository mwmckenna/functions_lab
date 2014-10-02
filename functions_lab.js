var sayHello = function () {
	console.log("Hello World!");
	};
sayHello();


var sayHelloPerson = function (person) {
	return "Hello, " + person + "!";
};
var message = sayHelloPerson("Lisa");
console.log(message);


var add = function (a, b) {
	return a + b;
};
//var sum = add (4, 5);
//console.log(sum);


var sub = function (a, b) {
	return a - b;
};
//var less = sub (5, 4);
//console.log(less);

var combine = function (a, b, c) {
	if (c == "true") {
		console.log (a + b);
	} 
	else {
		console.log(a - b);
	}
};
combine (4, 3, false);


