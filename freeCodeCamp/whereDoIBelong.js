function getIndexToIns(arr, num) { 

  arr.sort( (a, b) => {
    if (a < b) return -1;
  });
  console.log(arr)

  for (let i=0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length; // último
}
getIndexToIns([40, 60], 50);