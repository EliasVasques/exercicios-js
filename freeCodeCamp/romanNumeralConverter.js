/* 1 solução
function convertToRoman(num) {
    let inRoman = '';
    let arr = String(num).split('');
    const values = {
      'M': 1000,
      'D': 500, 
      'C': 100, 
      'L': 50, 
      'X': 10, 
      'V': 5, 
      'I': 1, 
    }
    const fourInARow = {
      'DCCCC': 'CM',
      'CCCC': 'CD',  
      'LXXXX': 'XC', 
      'XXXX': 'XL', 
      'VIIII': 'IX', 
      'IIII': 'IV', 
    }
    console.log(arr)
    while (arr.length > 0) {
      if (arr[0] == 0) {
        arr.shift()
        continue;
      }
      num = Number(arr[0] + '0'.repeat(arr.length - 1)); 
      arr.shift()

      let sum = 0;
      for (let sign in values) {
        if (values[sign] <= num) {
          while (sum + values[sign] <= num) {
            inRoman += sign;
            sum += values[sign];
          }
        }
      }
  
    }
    for (let sign in fourInARow) {
      if (inRoman.includes(sign)) {
        inRoman = inRoman.replace(sign, fourInARow[sign]);
      }
    }
    return inRoman;
}*/

// 2 solução
function convertToRoman(num) {
  let inRoman = '';
  const values = {
    M: 1000,
    CM: 900,
    D: 500, 
    CD: 400,
    C: 100, 
    XC: 90,
    L: 50, 
    XL: 40,
    X: 10, 
    IX: 9,
    V: 5,
    IV: 4, 
    I: 1, 
  }
  for (let sign in values) {
    while (num >= values[sign]) {
      inRoman += sign;
      num -= values[sign];
    } 
  }
  return inRoman;
}

convertToRoman(36);