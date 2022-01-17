function bouncer(arr) {
    /* solução 1
    let truthies = [];
    for (let item of arr) {
      if (item) truthies.push(item);
    }
    return truthies;*/

    // solução 2
    let noFalsy = arr.filter( elem => elem ); // ele tem q retorna true ou false, ent o js converte
    return noFalsy;
}
  
  bouncer([7, "ate", "", false, 9]);