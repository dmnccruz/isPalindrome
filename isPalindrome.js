const isPalindrome = (num) => {
  if (isNaN(num)) {
    return `"${num}" is not a valid number`;
  }
  const numString = num.toString();
  var lowerCaseNumString = numString.toLowerCase();
  var reversedNumString = lowerCaseNumString.split('').reverse().join('');
  return lowerCaseNumString === reversedNumString;
};

// test
console.log(isPalindrome(123321));
console.log(isPalindrome('1223321'));
console.log(isPalindrome('778'));
console.log(isPalindrome('700a'));
console.log(isPalindrome('imnotanumber'));
