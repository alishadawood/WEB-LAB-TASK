let numbers = [12, 45, 7, 89, 33, 5, 77];

let min = numbers[0];
let max = numbers[0];
for (let num of numbers) {
    if (num < min) {
        min = num;   
    }
    if (num > max) {
        max = num;   
    }
}

console.log("Minimum number:", min);
console.log("Maximum number:", max);
