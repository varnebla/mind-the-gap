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

  //WRITE YOUR CODE HERE!!🤘
  const letters = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  }
  let result = 0;
  if (letters[train[0]] !== 1) result += letters[train[0]]-1;
  for (let i = 0; i < train.length-1; i++) {
    if(letters[train[i + 1]] - letters[train[i]] > 1) result += (letters[train[i + 1]] - letters[train[i]] -1);
  }
  return result;
}

module.exports = countMissingCarriages;

