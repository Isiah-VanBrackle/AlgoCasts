// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
// study the every function more.

function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  // take the user's string split it into different characters, reverse their order and rejoin them.
  return str === reversed; // then return the boolean value (true or false )
}

// function everyPalindrome(str) { // every is an array helper method which checks if every value in an array passes a test(provided as a function)
//   return str.split('').every((character, i) =>{ // the function starts at 0, we include a second argument of i so that we can acces the index
//     return character === str[str.length - i -1] // it's known that str.length-1 gives you the last value in an array. by subtracting the current index first we allow ourselves to 'increment' down the array.
//   })
// }

module.exports = palindrome;
