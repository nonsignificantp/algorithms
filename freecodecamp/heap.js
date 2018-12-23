/*
Solution to 'No repeats please' excersice on freecodecamp.
https://learn.freecodecamp.org/coding-interview-prep/algorithms/no-repeats-please/
We use the Heap algorithm to find all permutations of a string of characters,
later we identify those strings with two equal consecutive characters and return
the number of permutations without two consecutive characters.
*/

function permAlone(str) {
  let arr = str.split('');
  let n = arr.length;
  let outputs = [];

  function _swap(e1, e2) {
    let temp = arr[e1];
    arr[e1] = arr[e2];
    arr[e2] = temp;
  }

  function _generate(n) {
    if (n == 1) outputs.push(arr.join(''))
    else
      for(let i = 0; i < n; i++) {
        _generate(n-1);
        _swap((n%2) ? i : 0, n-1);
      }
    }
  }

  _generate(n);
  return outputs.map(consecutives).filter((e) => !e).length;
}

function consecutives(str) {
  let arr = str.split('');
  return arr.some((e,i,a) => e == a[i+1]);
}
