// The rest operator allows you to take items from an array and use them to create a separate sub- array

// Example 1
let top5 = ['Byndoor', 'Uppunda', 'Udupi', 'Banglore', 'Mangalore'];

const [first, second, third, ...secondvisit] = top5

// unpacking value
console.log(first);
console.log(second);
console.log(third);

// created separate sub array secondvisit from top5
console.log(secondvisit);


// Example 2 of rest operator
function addTaxPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate * item)
}

let shoppingCart = addTaxPrices(1.1, 46, 89,35,79);
console.log(shoppingCart);