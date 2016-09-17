function fn_1(x) {
    function fn_2(x) {
        return x;
    }
    var phone = "647-629-2765";
    var run = fn_2(phone);
    console.log(run + ' Inside Function - Scope Chain');
    return x;
}
var phone = "905-761-9999";
var run = fn_1(phone);
console.log(this.run + ' Global Execution Context');

var tata= function wendy(){
	console.log('hi')
};