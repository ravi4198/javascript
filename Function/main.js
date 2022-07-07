// Analysis the call stack
var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

// variable inside the function has local scope
// The function with name is directly stored in Global scope/ object
// The arrow function or anonymousfunction not stored in Global Scope, they are stored in a variable 