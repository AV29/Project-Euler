const isPolindrome = function (number) {
    let origin = number.toString();
    let reverse = "";
    while (number > 0) {
        reverse += number % 10;
        number = (number - number % 10) / 10;
    }
    return reverse === origin;
};

const isPolindrome2 = number => number.toString().split('').reverse().join('') === number.toString();

function findLargestPolindrome(x) {
    let upperLimit = (10 ** x) - 1;
    const lowerLimit = (10 ** (x - 1));
    let result = 0;
    for (let i = upperLimit; i > lowerLimit; i -= 1) {
        for (let j = upperLimit; j > lowerLimit; j -= 1) {
            if (isPolindrome(i * j) && i * j > result) {
                result = i * j;
            }
        }
    }
    return result;
}

