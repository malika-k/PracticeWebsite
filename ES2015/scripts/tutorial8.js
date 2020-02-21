"use strict";
var num1;
var num2 = 10; //must initialize
var obj1 = {
    name: "malika"
};
console.log(obj1.name);
// obj1 = {}; cannot reassign new object to constant obj1
// to reassign, use let instead of constant
obj1.name = "arjun";
console.log(obj1.name);
// however can reassign new properties of obj1
