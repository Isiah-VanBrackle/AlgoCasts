// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = ''

  for (let char of str) { // take a given character in the user's (string)
    if (charMap[char]) { // if that character exists in our charMap hash
      charMap[char]++; // increment it's value
    } else {
      charMap[char] = 1; // otherwise it's the first time we've seen that character so set it's value to 1.
    }
  }

  for (let char in charMap) { // now take a specific character in our charMap hash
    if (charMap[char] > max) { // if that character is greater than our 'max' variable
      max = charMap[char]; // set our 'max' variable to the value of that character
      maxChar = char; // set our 'maxChar' variable to the actual character
    }
  }
  return maxChar; // finally 'return' that 'maxChar' variable 
}

module.exports = maxChar;
