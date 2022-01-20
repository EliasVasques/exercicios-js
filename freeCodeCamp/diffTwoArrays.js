function diffArray(arr1, arr2) {
  
  /* solução 1
  const newArr = [];
  for (let i=0; i<arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  for (let i=0; i<arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;*/

  // solução 2
  let twoArr = arr1.concat(arr2);
  const arrayDiff = twoArr.filter( (elem) => !arr1.includes(elem) || !arr2.includes(elem));
  return arrayDiff;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);