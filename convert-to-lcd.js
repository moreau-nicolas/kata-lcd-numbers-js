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

function lcdDigits(number, scale) {
    const decimalDigits = String(number).split('').map(Number);
    return decimalDigits.map(decimalDigit => scaledLcdDigit(decimalDigit, scale));
}

function scaledLcdDigit(decimalDigit, {width, height}) {
    const lcdDigit = LCD_DIGITS[decimalDigit];
    return [
        lcdDigit[0][0] + lcdDigit[0][1].repeat(width) + lcdDigit[0][2],
        ...copy(height - 1,
            lcdDigit[1][0] + ' '.repeat(width) + lcdDigit[1][2],
        ),
        lcdDigit[1][0] + lcdDigit[1][1].repeat(width) + lcdDigit[1][2],
        ...copy(height - 1,
            lcdDigit[2][0] + ' '.repeat(width) + lcdDigit[2][2],
        ),
        lcdDigit[2][0] + lcdDigit[2][1].repeat(width) + lcdDigit[2][2],
    ];
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
