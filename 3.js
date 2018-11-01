function isPrime(number) {
    let i = 2;
    while (i < number) {
        if (number % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}

function isPrime_Fast(number) {
    if (number === 1) return false;
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0)
            return false;
    }
    return true;
}

function findLargestPrimeFactor_Fast(number) {
    let divisor = 2;
    while (number > 1) {
        if (number % divisor === 0) {
            number /= divisor;
            divisor--;
        }
        divisor++;
    }
    return divisor;
}

function findPrimes(number) {
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

function findLargestPrimeFactor(number) {
    let current = number;
    while (1) {
        if (isPrime_Fast(current) && number % current === 0) return current;
        current--;
    }
}