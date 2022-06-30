/* filter() : filter function is used to filter the array and returns
new filtered array
*/

const arr = [5, 1, 3, 2, 6];

// filter odd values
function isOdd(x) {
  return x % 2; //if it is true then only element will added to the filtered array
}

// const output = arr.filter(isOdd);
// console.log(output);

// filter even values
function isEven(x) {
    return  x % 2 == 0;
}

// const output = arr.filter(isEven)
// console.log(output);

// filter the value Greaterthan4
// function greaterThan4(x) {
//     return x > 4;
// }

// const output = arr.filter(greaterThan4);
const output = arr.filter((x) => x > 4)
console.log(output);