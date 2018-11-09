function countSaturdays() {
    let i = 0;
    let counter = 0;
    while ((new Date(1901, i, 1)).getFullYear() !== 2000 || (new Date(1901, i, 1)).getMonth() !== 11) {
        if((new Date(1901, i, 1)).getDay() === 6) counter++;
        i++;
    }
    return {counter, i};
}