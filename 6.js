function squareDiff(lim) {
    let sumOfSquares = 0;
    let sum = 0;
    for(let i = 1; i <= lim; i++) {
        sumOfSquares += i ** 2;
        sum += i;
    }

    return sum ** 2 - sumOfSquares;
}