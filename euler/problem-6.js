/*
Solution for euler problem number 6.
*/

// With recursion

function nthPrime(n) {
	function _generate(n, p=2) {
		if (n==1) return p
		else {
			p++;
			let prime = [...Array(p).keys()].slice(2).filter(x=>p%x==0);
			if (!prm.length) n--;
			return _generate(n, p);
		}
	}

	return _generate(n);
}

// Without recursion
function nthPrime2(n) {
    const primes = [2];
    let check = 3;
  
    function _take(k) {
		const subarr = [];
		for (let i = 0; primes[i] <= k; i++) { 
        	subarr.push(primes[i]);
      	}
      	return subarr;
    }
  
    while (primes.length < n) {
      	let arr = _take(Math.ceil(Math.sqrt(check)));
		if (!arr.some((x) => check % x == 0)) {
			
			primes.push(check);
		}
		
		check += 2;
	}
    
    return primes.pop();
}
