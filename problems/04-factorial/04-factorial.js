/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
// 1, 2 , 6, 24, 120, 720, 5040, 40320
function factorial(sumNum) {
  if (sumNum === 1) {
    return 1;
  } else {
    let fact_num = sumNum * factorial(sumNum - 1);
    return fact_num;
  }
}
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(8));
