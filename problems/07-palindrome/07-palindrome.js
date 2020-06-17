/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
  //change all letters to lower case
  let someStrLower = someStr.toLowerCase();

  let split_pal = someStrLower.split("");

  let rev_pal = split_pal.reverse();

  let join_pal = rev_pal.join("");

  if (someStrLower === join_pal) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("can"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("eye"));
console.log(isPalindrome("Hawaii"));
console.log(isPalindrome("madam"));
