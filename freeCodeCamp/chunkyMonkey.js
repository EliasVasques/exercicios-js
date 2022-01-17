/* 1 solução
function chunkArrayInGroups(arr, size) {
    let array = [[]];
    
    let indexArray = 0;
    for (let i=0; i<arr.length; i++) {
      if (array[indexArray].length === size) {
        indexArray++;
        array.push([])
      }
      array[indexArray].push(arr[i]);
    } 
    return array;
}*/

// 2 solução
function chunkArrayInGroups(arr, size) {
    let group = [];
    while (arr.length > 0) {
      group.push(arr.splice(0, size));
    } 
    return group;
}
  
chunkArrayInGroups(["a", "b", "c", "d"], 2);