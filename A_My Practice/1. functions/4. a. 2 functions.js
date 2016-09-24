// 1st functions return and calls 2nd function ()

//FEEDBACK
// You're passing parameters, but you're not returning any functions. 
// Instead you're calling two IIFEs, the outer returning the result of calling the inner (c)
// rather than returning the function itself. 
// What exactly are you after?

// As far as _fn2 goes, you're not exactly passing anything to it.
// Well, you are with (b), but its not getting used because its not defined in the parameter list.
// But b is still accessible because its getting inherited from the parent scope.
// But because _fn2 is defined in _fn1 its only accessible there. 
// And because you're calling it directly within _fn1, there's really no point of it 
// being a function in the first place. Might as well be:

var a = 1;

(function _fn1(a) {
    var b = a + 100;
    console.log('b:' + b);
    return (function _fn2() {
        var c = b + 500;
        console.log('c:' + c);
        return c;
    })(b);
}(a));