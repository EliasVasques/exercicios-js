function rot13(str) {
    let newStr = '';
    let code;
    for (let i=0; i < str.length; i++) {
      code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        code -= 13;
        if (code < 65) {
        code = 90 - (64 - code);
        }
        newStr += String.fromCharCode(code);
        continue;
      }
      newStr += str[i];
    }
    console.log(newStr);
  
    return newStr;
}
  
rot13("SERR PBQR PNZC");