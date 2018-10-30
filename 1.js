function goGetIt(limit) {
    let result = 0;
    let iterations = 0;
    let i = 3;
    while (i < limit) {
        if (i % 3 === 0 || i % 5 === 0) result += i;
        i++;
        iterations++;
    }
    return {result, iterations}
}

function go(limit) {
    let result = 0;
    let current = 0;
    let iterations = 0;
    let i = 0;
    const pattern = [3, 2, 1, 3, 1, 2, 3];
    while (current < limit - pattern[pattern.length - 1]) {
        current += pattern[i];
        i = i === pattern.length - 1 ? 0 : i + 1;
        result += current;
        iterations++;
    }
    return {result, iterations}
}