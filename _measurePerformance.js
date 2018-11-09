function measurePerformance(...args) {
    let result;
    const isTimesOmmited = typeof args[0] === 'function';
    const times = isTimesOmmited ? 1 : args[0];
    const func = isTimesOmmited ? args[0] : args[1];
    const start = performance.now();
    for (let i = 0; i < times; i++) {
        result = func(...args.slice(isTimesOmmited ? 1 : 2))
    }
    const end = performance.now() - start;
    console.group(func.name);
    console.log("Result", result);
    console.log(`Time: ${parseFloat(end.toFixed(2))} ms`);
    console.groupEnd();

}