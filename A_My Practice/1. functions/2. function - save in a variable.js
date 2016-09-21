// save a function in a variable and execute it on the fly
var a=1;

var save = (function tony(r){

	
	return r+12;
})(a);
console.log('your total is ' + save + ' byeee');