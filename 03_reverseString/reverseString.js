/*

Assignment = Return the input string reversed

Variable we need:

1.	inputString
2.	reverseString 
3.  newArray

Method:

1. Take inputString
2. Turn inputString into an Array
3. Get the array length
4. Loop splicing from the end to the start into a new array
5. Print the new Array into reverseString
6.Set inputString = reverseString
*/

let newArray = [""];
let inputString = "";
let reverString = "";

let reverseString = function(inputString) {
   let splitString = Array.from(inputString);
   let splitStringLength = splitString.length;

   for (let i = 0; i < splitStringLength; i++) {
   let lastElement = splitString.pop(-1);
   newArray.push(lastElement); 
  }
  reverseString = newArray.join("");
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
