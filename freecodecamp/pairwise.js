/*
Answer for freecodecamp 'pairwise' problem.
https://learn.freecodecamp.org/coding-interview-prep/algorithms/pairwise/

pairwise() takes an array of integers and an integer and finds all pairs of
numbers which sums equals the integer argument. Once it found all pairs, returns
the sum of all the indexes of the numbers of each pair.
*/

function pairwise(arr, arg) {
  let acc = 0;
  arr = arr.map((e, i) => [i, e]);

  function _pairs(arr) {
    if (arr.length < 2) return
    else {
      let [head, tail] = [arr.shift(), arr];
      let i = tail.findIndex( e => (head[1] + e[1]) == arg );
      if (i >= 0) {
        acc += tail[i][0] + head[0];
        tail.splice(i,1);
      }
      _pairs(tail);
    }
  }

  _pairs(arr)
  return acc;
}
