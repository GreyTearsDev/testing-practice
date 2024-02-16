function caesar(str, factor) {
  const upperCaseString = str.toUpperCase();
  let cipher = "";
  
  for (let char of upperCaseString) {
    let ASCII = char.charCodeAt(0);

    if (ASCII >= 65 && ASCII <= 90) {
      const shiftedASCII = ((ASCII - 65 + factor) % 26 + 26) % 26 + 65;
      const shiftedChar = String.fromCharCode(shiftedASCII);
      cipher += shiftedChar;
    } else {
      cipher += char;
    }
  } 
  return cipher;
}

module.exports = caesar;
