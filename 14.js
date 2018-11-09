function collatz(start) {
    const sequence = [start];
    while (start !== 1) {
        start % 2 === 0 ? start /= 2 : start = 3 * start + 1;
        sequence.push(start);
    }
    return sequence;
}

function findLongestCollatz(upperLimit) {
    let longestSequenceLength = 0;
    let currentColatz = 0;
    let result;
    for (let i = upperLimit; i > 2; i--) {
        currentColatz = collatz(i);
        if (currentColatz.length > longestSequenceLength) {
            longestSequenceLength = currentColatz.length;
            result = {number: i, sequence: currentColatz};
        }
    }
    return result;
}
