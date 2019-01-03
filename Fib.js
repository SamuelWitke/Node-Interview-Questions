function fibonacci(num, memo = {}) {
	  if (memo[num]) return memo[num];
		if (num < 1)  return 0;
	  if (num <= 2) return 1;
	  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}
console.log(fibonacci(20));
