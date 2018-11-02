function findPrimes_sieve(number) {
    const S = [];
    S[1] = 0; // 1 - не простое число
    // заполняем решето единицами
    for (let k = 2; k <= number; k++)
        S[k] = 1;

    for (let k = 2; k * k <= number; k++) {
        // если k - простое (не вычеркнуто)
        if (S[k] === 1) {
            // то вычеркнем кратные k
            for (let l = k * k; l <= number; l += k) {
                S[l] = 0;
            }
        }
    }
    return S;
}

function sumOfPrimes(limit) {
    return findPrimes_sieve(limit).reduce((acc, curr, i) => curr ? acc += i : acc, 0);
}