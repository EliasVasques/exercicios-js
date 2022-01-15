function largestNumberArray(arr) {
    return arr.reduce( function(largestNumber, currentNumber) {
      if (currentNumber > largestNumber) {
        return currentNumber;
      } else {
        return largestNumber;
      }
    }, arr[0]);
}
  
  
function largestOfFour(matrix) { // PRINCIPAL
    let largestNumbers = [];
    for (let arr of matrix) {
      largestNumbers.push(largestNumberArray(arr));
    }
    return largestNumbers;
  
    // outra forma de fazer
    /*let largestNumbers = []; 
    let largestNumber;
    for (let array of matrix) {
      largestNumber = array[0];
      for (let elem of array) {
        if (elem > largestNumber) {
          largestNumber = elem;
        }
      }
      largestNumbers.push(largestNumber)
    }
    return largestNumbers;*/
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);