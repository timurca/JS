//Functioal Programming Eg

function mapForEach(RECEIVE_arr, RECEIVE_fnc) {
    
    var newArr = [];
    for (var i=0; i < RECEIVE_arr.length; i++) {
        newArr.push(
            RECEIVE_fnc(RECEIVE_arr[i])   
        )
    };
    
    return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);


var arr2 = mapForEach(arr1, function(RECEIVE_item) {
   return RECEIVE_item * 3; 
});
console.log(arr2);