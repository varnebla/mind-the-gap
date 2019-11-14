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
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const last = train[train.length-1];
  console.log(last, 'last');
  const sizeOfTrain = letters.slice(0, letters.indexOf(last)+1);
console.log(sizeOfTrain, 'size');
  const trainArr = train.split('');
  let missing = 0;
  for (let i = 0; i< sizeOfTrain.length; i++) {
    if (trainArr.indexOf(sizeOfTrain[i]) === -1) missing++;
  }
 return missing;
}

module.exports = countMissingCarriages;

