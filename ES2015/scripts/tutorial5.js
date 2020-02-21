"use strict";
function greetPerson(name) {
    if (name === "Chandler") {
        var greet = "Hello Chandler";
    }
    else {
        var greet = "Hi there";
    }
    console.log(greet);
}
greetPerson("Chandle");
//var keyword allows hoisting and
//functional scoping (rather than block scoping)
