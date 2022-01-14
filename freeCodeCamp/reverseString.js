// usando métodos
function reverseString1(str) {
    let strArray = str.split('');
    strArray.reverse();
    str = strArray.join('');
    return str;
}

// com for
function reverseString2(str) {
    let newStr = '';
    for (let i=str.length-1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

reverseString1("hello");
reverseString2("hello");