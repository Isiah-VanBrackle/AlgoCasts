// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++){
    // set variable i to 1; for as long as the user's input (n) is greater or equal to i incremtent i.
    if (i % 15 === 0) { // if (i) can be divided by 15 with no remainder console.log 'fizzbuzz'
      console.log('fizzbuzz')
    } else if (i % 3 === 0) { // otherwise if (i) can be divided by 3 perfectly, console.log 'fizz'
      console.log('fizz')
    } else if (i % 5 === 0) { // otherwise if (i) can be divided by 5 perfectly, console.log 'buzz'
      console.log('buzz')
    } else { // assuming none of the above conditions are true, output whatever (i) happens to be  
      console.log(i)
    }
  }
}

module.exports = fizzBuzz;
