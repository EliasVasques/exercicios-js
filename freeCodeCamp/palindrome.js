function palindrome(str) {
  let strArray = str.toUpperCase().split('');

  strArray = strArray.filter( function(char){
       if(char === ' ') { // se é espaço
        return false;
      } else if ( ( char.charCodeAt() >= 65 &&
                    char.charCodeAt() <= 90 ) ||
      ( !isNaN( Number( char ) ) ) ) { 
        return true;
      }
      return false;
  } ) ;
 str = strArray.join('');
 let reverseStr = strArray.reverse().join('');
 return str === reverseStr; 
}

palindrome("race car");