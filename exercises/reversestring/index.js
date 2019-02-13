// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed =''; // our reversed variable is initiated as an empty string.

  for (let char of str){ // for a given character of the user's input
    reversed = char + reversed // allow it to exist as an individual then add the current value of our reversed variable to it and set that combination to the new value of reversed.
  }
  return reversed;//after you've done the above for every character of the user's input output the final value 'reversed'
}

module.exports = reverse;
