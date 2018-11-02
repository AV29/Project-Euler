function findXPrime(index) {
    let i = 0;
    let curr = 2;
    while (true) {
        if (isPrime_Fast(curr)) {
            i++;
        }
        if (i === index) return curr;
        curr++;
    }
}

function isPrime_Fast(number) {
    if (number === 1) return false;
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0)
            return false;
    }
    return true;
}