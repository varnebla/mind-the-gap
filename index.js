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
  let trainArr = train.split('');
  let counter = 0;
  let abc =
  'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  let j = 0;
  for (let i = 0; i < trainArr.length; i++) {
    for (; j < abc.length; j++) {
      if (trainArr[i] === abc[j]) break;
      else counter++;
    }
    j++;
  }
  return counter;
}

module.exports = countMissingCarriages;

