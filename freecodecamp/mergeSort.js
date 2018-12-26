/*
Solution for the final excercise in the interview prep set of problems. Implement
a merge sort algorithm.
*/

function mergeSort(array) {
  let n = array.length;
  if (n < 2) return array
  else {
    let half = n / 2 | 0;
    return _merge(mergeSort(array.slice(0, half)), mergeSort(array.slice(half)))
  }
}

function _merge(array1, array2, merged=[]) {
  if (!array1.length | !array2.length) return [...merged, ...array1, ...array2]

  if (array1[0] <= array2[0]) merged.push(array1.shift())
  else {
    merged.push(array2.shift());
  }

  return _merge(array1, array2, merged);
}
