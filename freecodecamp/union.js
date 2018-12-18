/*

This is the response for finding the summetric differences to any number of sets as asked in:

https://learn.freecodecamp.org/coding-interview-prep/algorithms/find-the-symmetric-difference

The difference between union and union complete is that union use divide & conquer, finding
the union set between two arrays, returning one array and comparing it with the following 
array in the queue. Union complete compares all arrays at once. Be aware, each gives a 
different answer.

*/

function union(...args) {
  return divide(args)
}

function divide(array) {
  // Divide recursively until there is only one element inside the array.
  if (array.length == 1) return array[0];
  let [head, tail] = [array.shift(), array];
  return get_set_union(head, divide(tail))
}

function get_set_union(left, right) {
  // Remove all elements from left included in right and the other way around.
  // Also avoids duplicated elements inside the same array
  return [
    ...left.filter((x, i) => !right.includes(x) & !left.slice(i+1).includes(x)), 
    ...right.filter((x, i) => !left.includes(x) & !right.slice(i+1).includes(x))
  ];
}

function union_complete(...args) {
  return get_set_union_complete( [].concat(...args) );
}

function get_set_union_complete(array) {
  // Flattens the multi-array into one big array and removes those elements
  // that are duplicated.
  return array.filter((e) => {
    if ((array.filter((x) => e == x)).length > 1) return false;
    return true;
  })
}