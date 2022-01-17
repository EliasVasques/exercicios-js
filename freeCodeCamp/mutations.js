function mutation(arr) {
    let palavra1 = arr[0].toLowerCase();
    let palavra2 = arr[1].toLowerCase();
  
    /* SOLUÇÃO 1
    for (let letter of palavra2) {
      if (!palavra1.includes(letter)) return false
    }*/
    // SOLUÇÃO 2
    for (let letter of palavra2) {
      if (palavra1.indexOf(letter) === -1) return false
    }


    return true;
}
  
  mutation(["hello", "hey"]);