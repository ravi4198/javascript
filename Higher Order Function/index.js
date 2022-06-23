const radius = [3, 1, 2, 4];


// seperate area specific logic into another function
const area = function (radius) {
    return Math.PI * radius * radius;
};

// seperate sircuference specific logic into another functon
const circumference = function(radius) {
    return 2 * Math.PI * radius;
};

const diameter = function(radius) {
    return 2 * radius;
};

// Area
// const calculateArea = function (radius){
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output
// };

// console.log(calculateArea(radius));

// our implementation of map function (calculate)
Array.prototype.calculate = function (arr, logic){
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output
};

// Demonstration of map function
console.log(radius.map(area));
console.log(radius.calculate(area));

console.log();

// Here we passing area function to calculate function
console.log(calculate(radius, area));

console.log();
// Here we passing circuference function to calculate function
console.log(calculate(radius, circumference));

console.log();

console.log(radius.calculate(radius, diameter));

// Circumference
// const calculateCircumference =  function (radius){
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output
// };

// console.log(calculateCircumference(radius));

// // Diameter
// const calculateDiameter =  function (radius){
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i]);
//     }
//     return output
// };

// console.log(calculateDiameter(radius));
