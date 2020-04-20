function convertToLcd(number, scale = {width: 1, height: 1}) {
    const digits = lcdDigits(number, scale);
    return joinDigitLines(digits);
}

const ZERO = [
    ' _ ',
    '| |',
    '|_|',
];
const ONE = [
    '   ',
    '  |',
    '  |',
];
const TWO = [
    ' _ ',
    ' _|',
    '|_ ',
];
const THREE = [
    ' _ ',
    ' _|',
    ' _|',
];
const FOUR = [
    '   ',
    '|_|',
    '  |',
];
const FIVE = [
    ' _ ',
    '|_ ',
    ' _|',
];
const SIX = [
    ' _ ',
    '|_ ',
    '|_|',
];
const SEVEN = [
    ' _ ',
    '  |',
    '  |',
];
const EIGHT = [
    ' _ ',
    '|_|',
    '|_|',
];
const NINE = [
    ' _ ',
    '|_|',
    ' _|',
];
const LCD_DIGITS = [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE];

function copy(count, element) {
    return Array(count).fill(element);
}

const LCD_DIGITS_WIDTH_3_HEIGHT_2 = LCD_DIGITS.map(digit => [
    digit[0][0] + digit[0][1].repeat(3) + digit[0][2],
    ...copy(1,
        digit[1][0] + ' '.repeat(3) + digit[1][2],
    ),
    digit[1][0] + digit[1][1].repeat(3) + digit[1][2],
    ...copy(1,
        digit[2][0] + ' '.repeat(3) + digit[2][2],
    ),
    digit[2][0] + digit[2][1].repeat(3) + digit[2][2],
]);
const LCD_DIGITS_WIDTH_4_HEIGHT_3 = LCD_DIGITS.map(digit => [
    digit[0][0] + digit[0][1].repeat(4) + digit[0][2],
    ...copy(2,
        digit[1][0] + ' '.repeat(4) + digit[1][2],
    ),
    digit[1][0] + digit[1][1].repeat(4) + digit[1][2],
    ...copy(2,
        digit[2][0] + ' '.repeat(4) + digit[2][2],
    ),
    digit[2][0] + digit[2][1].repeat(4) + digit[2][2],
]);

function lcdDigits(number, scale) {
    const decimalDigits = String(number).split('').map(Number);
    return decimalDigits.map(decimalDigit => scaledLcdDigit(decimalDigit, scale));
}

function scaledLcdDigit(digit, {width, height}) {
    let digits = LCD_DIGITS;
    if (width === 3 && height === 2) {
        digits = LCD_DIGITS_WIDTH_3_HEIGHT_2;
    }
    if (width === 4 && height === 3) {
        digits = LCD_DIGITS_WIDTH_4_HEIGHT_3;
    }
    return digits[digit];
}

function joinDigitLines(digits) {
    const concatLines = (a, b) =>
        a.map((accumulator, index) => accumulator + b[index]);
    const lines = digits.reduce(concatLines);
    return lines.join('\n') + '\n';
}

module.exports = {
    convertToLcd,
}
