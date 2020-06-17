/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
  let num1 = result[0];
  let num2 = result[1];
  next, (count = 2);

  while (count < n) {
    next = num1 + num2;
    num1 = num2;
    num2 = next;
    result.push(next);
    count++;
  }
  return result;
}
console.log(fib(n));
