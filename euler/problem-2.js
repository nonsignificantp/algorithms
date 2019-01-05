/*
Solution for problem 2 of the euler project on freecodecamp.
https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-2-even-fibonacci-numbers/
*/

function fiboEvenSum(n) {

  function _generate(n, seq=[1,1]) {
    if (n < 1) return seq
    else {
      seq = [1, 1, ...seq.slice(0, -1).map((e, i) => e + seq[i+1])];
      return _generate(n-1, seq);
    }
  }
  return _generate(n).filter(e => e%2 == 0).reduce((acc, val) => acc + val,0);
}
