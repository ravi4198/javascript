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