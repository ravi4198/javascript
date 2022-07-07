// window is a Global object which is created by the javascript engine
// At the Global level this is equal to window (this === window)
// Anything which is not inside the function is Global

var a = 10;
function b() {
    var x = 10;
}

console.log(window.a);  // Global scope
console.log(this.a);    // Global
console.log(a);     // Global

console.log(x); // has local scope, gives reference error not defined
