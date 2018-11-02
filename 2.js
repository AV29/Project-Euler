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

function recursive_fib_2(n) {
    let cache = [];

    function recursive(n) {
        let fibonachi = cache[n];
        if (!fibonachi) {
            if (n <= 1) {
                console.log('initial ' + n + '-th elem');
                fibonachi = n;
            } else {
                console.log('recursive calculating ' + n + '-th elem');
                fibonachi = recursive(n - 1) + recursive(n - 2);
            }

            cache[n] = fibonachi;
        } else {
            console.log('getting ' + n + '-th elem from cache')
        }
        return fibonachi;
    }

    return recursive(n);
}

