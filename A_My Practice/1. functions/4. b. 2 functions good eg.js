function _fn1(a) {
  var b = a + 100;
  console.log('b:' + b);
  return b;
}

function _fn2(b) {
  var c = b + 500;
  console.log('c:' + c);
  return c;
}

var b = _fn1(a);
_fn2(b);

// or 

_fn2(_fn1(a));