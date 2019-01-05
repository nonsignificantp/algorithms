/*
Solution for problem 3 of the euler project on freecodecamp.
https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-3-largest-prime-factor
*/

function* primes() {
  let n = 1;
  while (true) {
    n++;
    if (isPrime(n)) {
      let reset = yield n;
      if (reset) n = 1;
    }
  }
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}

function largestPrimeFactor(number) {
  let prime = primes();
  let factors = [];
  let stop = false;

  while (number != 1) {
    let p = prime.next(stop).value;
    stop = false;
    if (number % p == 0) {
      factors.push(p);
      stop = true;
      number = number / p;
    }
  }

  return Math.max(...factors);
}

function largestPrimeFactor_rec(number, bigF=0) {
  if (number == 1) return bigF;
  let prime_numbers = primes();

  for (let p of prime_numbers) {
    if (number % p == 0) {
      if (p > bigF) {
        bigF = p;
      }
      number = number / p;
      break;
    }
  }

  return largestPrimeFactor_rec(number, bigF);
}
