function reverseString(string) {
  let str = string.split('');
  let reversedStr = "";
  
  while (str.length > 0) {
    reversedStr += str.pop();
  }
  
  return reversedStr;
}


module.exports = reverseString;
