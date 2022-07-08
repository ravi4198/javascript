// lexical Environment

function a() {
    // here function has accessed variable b in global scope because it contains lexical memory of Parent (Global)
    console.log(b);
}

var b = 10;     // Global
a();


// example 2 
// here below function is looking for variable b in it's local scope first,
//  then it will look for function a() scope& lexical environment,
// if variable b is not found in function a then it will look for Global scope
// c() -> a() -> Global -> null   // scope chain or lexical order

function a() {
    c();    // new execution context is created
    function c(params) {
        console.log(b);
    }
}

var b = 10;
a();


// global scope
function a() {
    var b = 10;
    c();
    function c() {
        
    }
}

a();
console.log(b);