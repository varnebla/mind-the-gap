/*
You must implement a function that receives the sequence of carriages as a string of carriage
letters and returns the number of missing carriages. The train carriages are initially lettered
from 'A' onwards with no gaps. Several carriages may be missing, but the remaining carriages are
in their original sequence order. The highest-lettered carriage can never be missing (because that
is where the engine is).

The number of carriages in a train can vary from 1 to 26 (i.e. 'A' to 'Z').

Example:
countMissingCarriages("ABC") //should return 0 
countMissingCarriages("ABD") //should return 1 
countMissingCarriages("BCF") //should return 3 
*/

function countMissingCarriages(train) {

  
  let last = train.charCodeAt(train.length-1);
  console.log(last)
  let res = last-64-train.length;
  return res

  //WRITE YOUR CODE HERE!!🤘

}

module.exports = countMissingCarriages;

