let num1;
const num2 = 10; //must initialize

const obj1 = {
  name: "malika"
};
console.log(obj1.name);

// obj1 = {}; cannot reassign new object to constant obj1
// to reassign, use let instead of constant

obj1.name = "arjun";
console.log(obj1.name);

// however can reassign new properties of obj1
