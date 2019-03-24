const majorityElement = require('./index.js') // this line exist simply so that i can reference the function from the other file

test('majorityElement function exist', ()=> { //this string points to an anonymous function which
  expect(typeof majorityElement).toEqual('function');// whether or not the function exist by checking if the majorityElement's type is a function
});

test('finds the majority element', ()=> {
  const arr1 = [1,2,5,1,1]
  const arr2 = [5,3,8,8,8,1,8,8]
  const arr3 = [4,7,4,4,7,4,7,4,4,4,3]
  expect(arr1).toEqual(1);
  expect(arr2).toEqual(8);
  expect(arr3).toEqual(4);
})
