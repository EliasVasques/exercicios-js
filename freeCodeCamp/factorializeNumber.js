function factorialize(num) {
    let accumulator = 1;
    for (let i=num; i >= 1; i--) {
      accumulator *= i;
    }
    return accumulator;
}

factorialize(5);