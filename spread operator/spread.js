// Demonstartion of spread operator (Used for unpaking arry)

// without spread opreator
let top5 = ['Byndoor', 'Uppunda', 'Udupi', 'Banglore', 'Mangalore'];

function showIterator(place1, place2, place3) {
    console.log('Visit', place1);
    console.log('Then Visit', place2);
    console.log('Finish with a visit to', place3);
}

showIterator(top5[0], top5[1], top5[2]);

console.log();

// with spread operator to unpack the values of array and remaining values are in sub array
// The spread operator allows you to pass all array elements into function without having to type them all individually

showIterator(...top5);
// console.log(...top5);

console.log('====================================');

// Using the spread operator, it's easy to concatenate arrays:
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

// It's also easy to join objects:
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}


// Add new members to arrays without using the push() method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// Convert a string to an array using the spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']


// Copy either an object or an array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)


// You can copy an array into a completely separate array, also using the spread operator, like this:
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2)