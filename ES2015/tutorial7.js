"use strict";
/*
for(var i=1; i<=5 ; i++){
  setTimeout(function(){console.log(i);}, 1000);
}
*/
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 1000);
};
// expect output 1 2 3 4 5
// but got 6 6 6 6 6
// bc loop has fully run before timeout prints val of i
for (var i = 1; i <= 5; i++) {
    _loop_1(i);
}
//let keyword will fix issue
