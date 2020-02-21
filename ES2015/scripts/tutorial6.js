"use strict";
function greetPerson(name) {
    var greet;
    if (name === "Chandler") {
        greet = "Hello Chandler";
    }
    else {
        greet = "Hi there";
    }
    console.log(greet);
}
greetPerson("Chandle");
//var - functional scope
//let - block scope
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    var b_1 = 20;
    console.log(a);
    console.log(b_1);
}
console.log(a);
console.log(b);
