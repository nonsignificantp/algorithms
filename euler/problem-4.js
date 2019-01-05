/*
Solution for problem 4 of the euler project on freecodecamp.
*/

function largestPalindromeProduct(n) {
  let top = (10**n) - 1;
  let bot = (10**(n-1)) - 1;
  let big = 0;

  for (let p = top; p > bot; p--) {
    for (let q = p; q > bot; q--) {
      let product = p * q;
      if (isPalindrome(product) & bigger < product) bigger = product;
    }
  }
  return big;
}

function isPalindrome(num) {
  if (num == fetchNum(num)) return true;
  return false
}

function fetchNum(num) {
  let reversed = num.toString().split('').reverse().join('');

  return Number(reversed);
}
