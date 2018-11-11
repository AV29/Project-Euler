function measurePerformance(...args) {
    let result;
    const isTimesOmitted = typeof args[0] === 'function';
    const times = isTimesOmitted ? 1 : args[0];
    const func = isTimesOmitted ? args[0] : args[1];
    const functionArgs = args.slice(isTimesOmitted ? 1 : 2);
    const start = performance.now();
    for (let i = 0; i < times; i++) {
        result = func(...functionArgs)
    }
    const end = performance.now() - start;
    console.group(`${func.name}(${!functionArgs[0].length || functionArgs[0].length < 6 ? functionArgs : '...'}) x ${times} times`);
    console.log("Result", result);
    console.log(`Time: ${parseFloat(end.toFixed(2))} ms`);
    console.groupEnd();
    return result;
}