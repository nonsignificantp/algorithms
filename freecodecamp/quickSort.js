/*
quickSort implementation, solution for freecodecamp exercise:
https://learn.freecodecamp.org/coding-interview-prep/algorithms/implement-quick-sort/
*/

function quickSort(array) {
  if (array.length < 2) return array
  else {
    let sml = array.slice(1).filter((x) => x <= array[0]);
    let big = array.slice(1).filter((x) => x > array[0]);
    return [...quickSort(sml), array[0], ...quickSort(big)];
  }
}
