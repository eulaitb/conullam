// Sample values array
const values = [1, 2, 3, 4, 5];

// Sample valueof function
function square(x) {
  return x * x;
}

// Create the generator object
const generator = numbers$2(values, square);

// Iterate over the generator using a for...of loop
for (let result of generator) {
  console.log(result);
}
