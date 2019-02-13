// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed =
    n.toString().split('').reverse().join('');
    // take the user's number (n), turn it to a string, split up the characters, creating individual strings assuming there are multiple, reverse their order and join them back together.

  if (n < 0) { // if the user's number was originally less than 0
    return parseInt(reversed) * -1; //do the above function, turn it back into an integer (you'll lose the - sign behind the number after the conversion) multiply it by -1 to reflect/regain its negative nature
  }
  return parseInt(reversed); // other wise just convert the number back into an int and return it. 
}

module.exports = reverseInt;
