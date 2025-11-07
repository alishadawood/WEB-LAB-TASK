let numbers = [1, 3, 6, 7];

let product = numbers.reduce(function(acc, num) {
  return acc * num;
}, 1);
console.log("Product of all numbers is:", product);
