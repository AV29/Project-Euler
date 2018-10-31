function loop_fib(n) {
    let prev = 0;
    let curr = 1;
    let next = curr + prev;
    const acc = [];
    while (n > 0) {
        acc.push(next);
        next = curr + prev;
        prev = curr;
        curr = next;
        n--;
    }
    return acc;
}

function loop_fib_limit_even(limit) {
    let prev = 0;
    let curr = 1;
    let next = curr + prev;
    let acc = 0;
    while (limit > next) {
        if (next % 2 === 0) acc += next;
        next = curr + prev;
        prev = curr;
        curr = next;
    }
    return acc;
}

function recursive_fib(n) {
    return n <= 1 ? n : recursive_fib(n - 1) + recursive_fib(n - 2);
}

