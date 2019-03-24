// --- Directions
// Given an array with N elements
// return the element that occurs with in the array the majority of the time
// in other words return the element that is > N/2
//--- Example
// const arr1 = [1,2,5,1,1] => 1
// const arr2 = [4,7,4,4,7,4,7,4,4,4,3] => 4

function majorityElement(array){
  // step 1 - here i want to selet a candidate for majority element
  let intitial_count = 0 // here we make a variable to count an element. if at the end of the loop the count is 0 then there is no majority element
  let candidate = null // just initializing a null value candidate to change later
  for(let i = 0; i < array.length; i++){ // starting at index 0 for as long as i is less than the length of the array look at an element do the code below.
    if(intitial_count === 0 ){ // this is sort of a base case situation in that if initial count is 0 we'll be selecting a new candidate.
      candidate = array[i] // here we're setting candidate = to the element at this index of the array.
      intitial_count = 1 // we set the initial count to 1 to mark the first time we've encountered this element.
    } else { // if initial_count isn't 0 then we've encountered this element before
        if(candidate === array[i]){ //candidate was already set earlier, so now candidate = array[i] is checking to see if it's the same element that was previously set.
        intitial_count = intitial_count+1; // if it's the same increase the count
        } else {
        intitial_count= intitial_count-1; // if it's not the same decreast the count. if the count gets decreased down to 0 we'll be electing a new candidate.
      }
    }
  } // this closes the first for loop
  if(intitial_count === 0){ // if we get to this point and initial_count is 0 then there is no majority
    return null
  } //start of step 2
  let element_count = 0 // this is a disticntly different count from the above hence the different name, here i'm counting how many times the candidate appears in the array.
  for(let i = 0; i < array.length; i++){
    if(candidate === array[i]){
      element_count = element_count+1
    }
  }
  return (element_count > array.length/2) ? candidate : null;
  // if the candidate appears in the array more times than the lenght of the array/2 we have a winner (because that means it occupies more than half the array)
}
