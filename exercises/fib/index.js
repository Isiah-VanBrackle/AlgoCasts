// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  const fibonacci = [0,1] // i've created this array and hard coded 0,1 into it because i need a starting point for the series.
  for (let i = 2; i <= n; i++){ // i start from 2 not 1 because 'n' represents the elements in the array, 2 would be the element following the 2 i already started my array with
    const a = fibonacci[i - 1] // this will give us the element preceeding 'i'
    const b = fibonacci[i - 2] // this will give us the element preceeding a.
    fibonacci.push(a + b) // here we add those values together and push the result into our array.
  }
  return fibonacci[fibonacci.length - 1] // since we continue the loop until n is hit. we can now return the element we want.
}

module.exports = fib;
