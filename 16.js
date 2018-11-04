const vocabulary = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand'
};

function parse(number) {
    const result = [];
    let current;
    let degree;
    let phrase = "";
    while (number) {
        degree = 10 ** (number.toString().length - 1);
        current = number >= 20 || number < 10 ? number - number % degree : number;
        result.push(current);
        phrase += getWord(number, current, degree);
        number -= current;
    }
    return {result, phrase: phrase.trim(), lettersCount: phrase.replace(/\s/g, '').length};
}

function getWord(original, current, degree) {
    return degree >= 100
        ? `${vocabulary[current.toString()[0]]} ${vocabulary[degree]} ${(original % 100) ? 'and' : ''} `
        : `${vocabulary[current]} `;
}

function startCounting(limit) {
    let sum = 0;
    let data = [];
    for (let i = 1; i <= limit; i++) {
        let res = parse(i);
        data.push(res);
        sum += res.lettersCount;
    }
    return {sum, data};
}