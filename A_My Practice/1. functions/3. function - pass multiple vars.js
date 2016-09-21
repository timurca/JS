// pass multipe vars to 1 function

var phone = "647 438 0002";
var bridge = "123456";

function fn_(x) {
	
	return x;
}

var run1 = fn_(phone);
var run2 = fn_(bridge);

console.log(this.run1);
console.log(run2);

