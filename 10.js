function sumOfPrimes(limit) {
    return sieve(limit).reduce((acc, curr, i) => curr ? acc += i : acc, 0);
}

function sieve(lim) {
    const s = [];
    s[1] = 0;
    for (let i = 2; i <= lim; i++) s[i] = 1;

    for (let j = 2; j * j <= lim; j++) {
        if (s[j] === 1) {
            for (let k = j * j; k <= lim; k += j) {
                s[k] = 0;
            }
        }
    }
    return s;
}