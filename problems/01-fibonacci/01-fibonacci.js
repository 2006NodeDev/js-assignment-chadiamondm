/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

// FIB: 0 1 1 2 3 5 8 13 21 34 55

// n=4, return 2
// n=7 return 8
// n=1, return 0
//need base case/ if it gets this input it will stop.
function fib(n) {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    let fibnum = fib(n - 1) + fib(n - 2);
    return fibnum;
  }
}

let a = fib(3);
let b = fib(5);
let c = fib(9);

console.log(a, b, c);
