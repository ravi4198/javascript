/*
Reduce:
The reduce() method reduces an array of values down to just one value. To get the output value,
 it runs a reducer function on each element of the array.

 syntax
 arr.reduce(callback[, initialValue])

 */

const arr = [5, 1, 3, 2, 6];


//  sum or max
// function findSum(arr) {
//     let sum = 0;
//     for (let index = 0; index < arr.length; index++) {
//         sum = sum + arr[index];
//     }
//     return sum;
// }

// console.log(findSum(arr));

// Demonstration of reduce() by using findSum callback function
// const output = arr.reduce(function (acc, curr){
//     acc = acc + curr;
//     return acc;
// }, 0);

// console.log(output);

// Find Max
function findMax(arr) {
    let max = 0;    // initial value
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > max) {
            max = arr[index];   // swap
        }  
    }
    return max;
}

console.log(findMax(arr));

// Find Max using reduce function
const output = arr.reduce(function(max, curr){
    if (curr > max) {
        max = curr
    }
    return max
}, 0)

console.log(output);