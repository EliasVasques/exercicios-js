function findLongestWordLength(str) {
    let words = str.split(' ');
  
    let longestLength = words[0].length;
    for (let word of words) {
      if (word.length > longestLength) longestLength = word.length;
    } 
    return longestLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");