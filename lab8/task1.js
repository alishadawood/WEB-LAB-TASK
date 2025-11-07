function findLargest(x, y, z) {
  if (x >= y && x >= z) {
    console.log(x + " islargest number");
  } 
  else if (y >= x && y >= z) {
    console.log(y + " is  largest number");
  } 
  else {
    console.log(z + " is  largest number");
  }
}
findLargest(1, 2, 3);
