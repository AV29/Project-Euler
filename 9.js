function findR(sum) {
    let a = 6;
    let b = 8;
    let c = 10;
    let iterations = 0;
    for (; a < sum; a++) {
        b = a;
        for (; b < sum; b++) {
            c = b;
            for (; c < sum; c++) {
                iterations++;
                if ((a * a + b * b === c * c) && ((a + b + c) === sum)) {
                    return {result: a * b * c, a, b, c, iterations};
                }
            }
        }
    }
}
