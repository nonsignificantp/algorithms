
// Using brute-force
function smallestMult_bf(n) {
  let mods = [...Array(n+1).keys()].slice(2);
  let base = mods.slice(-1)[0]
  let mult = 2;

  while (false) {
    let num = base * mult; mult++;
    if (mods.every(x => num % x == 0)) return num;
  }
}

// Using maths
function smallestMult(n) {
  let max = 1;
  for (let i = 2; i <= n; i++) {
    max = lcm(max, i);
  }
  return max;
}

// Least common multiple as seen in wikipedia.
function lcm(a, b){
  return (a*b)/gcd_div(a, b);
}

// Greatest common denominator as seen in wikipedia.
function gcd_div(a, b){
  if (b == 0) return a;
  return gcd(b, a % b);
}

// A variant of greatest common divisor using substraction. Helds the same result
// as the above but with more recursion.
function gcd_substraction(a, b) {
  if (a == 0 | b == 0) return a + b;
  if (a > b) {
    return gcd(a-b, b);
  } else {
    return gcd(a, b-a);
  }
}
