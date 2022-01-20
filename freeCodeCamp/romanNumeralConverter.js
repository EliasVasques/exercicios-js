function convertToRoman(num) {
    /*
    let table = ['I', 'V', 'X', 'L', 'C', 'D', 'M']; 
    let arr = String(num).split('');
    //console.log('I'.repeat(6 - 5))
    let inRoman = ''; 
  
    for (let num of arr) {
      switch(arr.length) {
        case 1:
          if (num <= 3) inRoman += 'I'.repeat(3);
          else if (num == 4) inRoman += 'IV';
          else if (num => 5 && num <= 8) {
            inRoman += 'V' +  'I'.repeat(num - 5);
          } 
          else if (num == 9) inRoman += 'IX';
          break
      }
    }
    console.log(inRoman)
  
   return num;*/
    //num = 3999
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
      //console.log(num)
  
      let sum = 0;
      for (let sign in values) {
        //console.log(sign)
        if (values[sign] <= num) {
          while (sum + values[sign] <= num) {
            inRoman += sign;
            sum += values[sign];
            //console.log(sum)
          }
        }
      }
  
    }
    /*let name = 'Elias'
    name.replace('E', 'i')
    console.log(name)*/
  
    // substituir 4 seguidos
    for (let sign in fourInARow) {
      //console.log(sign)
      if (inRoman.includes(sign)) {
        //console.log(sign.repeat(4))
        //if (sign === 'I') 
        inRoman = inRoman.replace(sign, fourInARow[sign]);
      }
    }
  
    console.log(inRoman)
    return inRoman;
}
  
convertToRoman(36);