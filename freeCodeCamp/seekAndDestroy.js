function destroyer(arr) {
    /* solução 1
    let items = [];
    for (let key in arguments) {
        if (key == 0) continue;
        items.push(arguments[key]);
    }
    let newArray = [];
    for (let elem of arr) {
        if (items.indexOf(elem) === -1) newArray.push(elem);
    }
    return newArray;*/

    // solução 2
    let items = Array.from(arguments).slice(1); 
    return arr.filter( elem => !items.includes(elem) )
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, 8);



