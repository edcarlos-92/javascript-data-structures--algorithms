function slowFib(n) {
  if (n <= 2) return 1;
  let result = fib(n - 1) + fib(n - 2);
  return result;
}

function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let result = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = result;
  return result;
}
function fib_table(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
//console.log(fib(40));
//console.log(slowFib(45));
//console.log(fib_table(45));
//From O(2^n) to O(n)
