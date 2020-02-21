/*
for(var i=1; i<=5 ; i++){
  setTimeout(function(){console.log(i);}, 1000);
}
*/

// expect output 1 2 3 4 5
// but got 6 6 6 6 6
// bc loop has fully run before timeout prints val of i

for(let i=1; i<=5 ; i++){
  setTimeout(function(){console.log(i);}, 1000);
}

//let keyword will fix issue
