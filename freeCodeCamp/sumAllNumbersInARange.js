function sumAll(arr) {
    /*arr.sort( (a, b) => {
      return a - b;
    });*/
    let start = Math.min(arr[0], arr[1]);
    let end = Math.max(arr[0], arr[1]);
    
    let sum = 0;
    
    for (let i=start; i <= end; i++) {
      sum += i;
    }
    return sum;
}
  
sumAll([1, 4]);