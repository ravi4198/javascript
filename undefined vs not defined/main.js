// undefined is a placeholder value for the variable
// not defined : if we want to access variable which is not declared then reference error shows 'not defined'

var a;
console.log(a); // undefined

if (a === undefined) {
    console.log('a is undefined');
} else {
    console.log('a is not defined');
}

//  Java Script is loosely coupled language
var a;
console.log(a);
a = 10;
console.log(a);
a = 'hello world'
console.log(a);


//  never do this following things (Bad practise)
a = undefined;
console.log(a); // undefined