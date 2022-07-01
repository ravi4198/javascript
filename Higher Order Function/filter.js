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


// example for filter()
// ['akshay', 'deepika']
const users = [
  {firstName: 'akshay', lastName: 'saini', age: 26},
  {firstName: 'donald', lastName: 'trumph', age: 75},
  {firstName: 'elon', lastName: 'musk', age: 50},
  {firstName: 'deepika', lastName: 'padukone', age: 26},
]

const output1 = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output1);