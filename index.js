
function isPalindrome(x) {
  x = x.toLowerCase();
  const b =  x.split('').reverse().join('') ;
  
  return x === b
  
}

console.log(isPalindrome('a'))