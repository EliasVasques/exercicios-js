// encontrei três soluções, a melhor é a descomentada
function titleCase(str) {
    let words = str.split(' ');
    /*let newStr = '';
    for (let word of words) {
      word = word[0].toUpperCase() + word.slice(1).toLowerCase() + ' ';
      newStr += word;
    } 
    return newStr.trim();*/
  
    /*let wordsTitleCase = words.reduce(function(phrase, word) {
      return phrase + word[0].toUpperCase() + word.slice(1).toLowerCase() + ' ';
    }, '');
    return wordsTitleCase.trim();*/

    let wordsTitleCase = words.map(function( word ) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    return wordsTitleCase.join(' ');
}

titleCase("sHoRt AnD sToUt");