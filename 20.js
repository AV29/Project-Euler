function fact(n) {
    let result = 1;
    for (let i = 1; i < n; i++) {
        result *= i;
    }
    return result;
}

function factorization(n) {
    const sieve = findPrimes_sieve(n);
    const data = [];
    for (let i = 1; i < n; i++) {
        if (sieve[i]) {
            data.push(i);
        } else {
            data.push(...factorize(i));
        }
    }
    console.log(fact(n));
    console.log(data.reduce((res, el) => res * el, 1));
    return data;
}

function factorize(number) {
    let divisor = 2;
    const divisors = [];
    while (number > 1) {
        if (number % divisor === 0) {
            number /= divisor;
            divisors.push(divisor);
            divisor--;
        }
        divisor++;
    }
    return divisors;
}

function findPrimes_sieve(number) {
    const S = [];
    S[1] = 0;
    for (let k = 2; k <= number; k++)
        S[k] = 1;

    for (let k = 2; k * k <= number; k++) {
        if (S[k] === 1) {
            for (let l = k * k; l <= number; l += k) {
                S[l] = 0;
            }
        }
    }
    return S;
}