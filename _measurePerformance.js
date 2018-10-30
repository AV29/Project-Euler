function measurePerformance(times, func, ...args) {
    let result;
    const start = performance.now();
    for (let i = 0; i < times; i++) {
        result = func(...args)
    }
    console.log(result, " in ", (performance.now() - start).toFixed(2));
}