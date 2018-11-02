function smallestMultiple(lim) {
    let i = lim;
    while (true) {
        let j = lim >= 20 ? lim / 2 + 1 : 2;
        while (j < lim) {
            if (i % j !== 0) break;
            j += 1;
        }
        if (j === lim) return i;
        i += 1;
    }
}
