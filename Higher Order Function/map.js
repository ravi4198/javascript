/* map(): map function takes callback function as arguments and applies that callback
function to each element of the arrays.

map() transform the array into new function
*/

const arr = [5, 1, 3, 2, 6];

// function double(x) {
//     return x * 2;
// }

// function triple(x) {
//     return x * 3;
// }

function binary(x) {
    return x.toString(2)
}

// const output = arr.map(binary);

// second method (syntax)
// const output = arr.map(function binary(x) {
//     return x.toString(2)
// });

// third method (syntax)
// const output = arr.map((x) => {
//     return x.toString(2)
// });


// fouth method (syntax)
const output = arr.map((x) => x.toString(2));
console.log(output);

