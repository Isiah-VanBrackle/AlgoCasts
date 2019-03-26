// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
//   reduce is used to take all the different values in an array and condense them down to one singular value.

function reverse(str) {
  let reversed =''; // our reversed variable is initiated as an empty string.

  for (let char of str){ // for a given character of the user's input
    reversed = char + reversed // allow it to exist as an individual then add the current value of our reversed variable to it and set that combination to the new value of reversed.
  }
  return reversed;//after you've done the above for every character of the user's input output the final value 'reversed'
}

// function reducedReversed(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '')
// }

// function reverseMethod(str) {
//   let arr = str.split('');
//   arr.reverse();
//   return arr.join('');
//   cleaned up version = return str.split('').reverse().join('')
// }

module.exports = reverse;
