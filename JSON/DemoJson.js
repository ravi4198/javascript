'{"greeting":"hello"}'

const jsonStr = '{"greeting":"hello"}'

// Parsing JSON String into Javascript Object
const aPlainObj = JSON.parse(jsonStr);

// Changing value
aPlainObj.greeting = 'hi';

console.log(aPlainObj);

// Converting JavaScript object into JSON String

// Regular JS object
const data = {
    firstName : "Jhon",
    lastName : "Doe",
    greeting : "Hello",
}

const jsonString = JSON.stringify(data);

console.log(jsonString);

var a;
a = 10

var a = 20

console.log(a);