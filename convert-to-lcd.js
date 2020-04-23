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
const LCD_DIGITS = [
    ZERO,
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
];

const ZERO_WIDTH_3_HEIGHT_2 = [
    ' ___ ',
    '|   |',
    '|   |',
    '|   |',
    '|___|',
];
const ONE_WIDTH_3_HEIGHT_2 = [
    '     ',
    '    |',
    '    |',
    '    |',
    '    |',
];
const TWO_WIDTH_3_HEIGHT_2 = [
    ' ___ ',
    '    |',
    ' ___|',
    '|    ',
    '|___ ',
];
const THREE_WIDTH_3_HEIGHT_2 = [
    ' ___ ',
    '    |',
    ' ___|',
    '    |',
    ' ___|',
];
const FOUR_WIDTH_3_HEIGHT_2 = [
    '     ',
    '|   |',
    '|___|',
    '    |',
    '    |',
];
const FIVE_WIDTH_3_HEIGHT_2 = [
    ' ___ ',
    '|    ',
    '|___ ',
    '    |',
    ' ___|',
];
const SIX_WIDTH_3_HEIGHT_2 = [
    ' ___ ',
    '|    ',
    '|___ ',
    '|   |',
    '|___|',
];
const SEVEN_WIDTH_3_HEIGHT_2 = [
    ' ___ ',
    '    |',
    '    |',
    '    |',
    '    |',
];
const EIGHT_WIDTH_3_HEIGHT_2 = [
    ' ___ ',
    '|   |',
    '|___|',
    '|   |',
    '|___|',
];
const NINE_WIDTH_3_HEIGHT_2 = [
    ' ___ ',
    '|   |',
    '|___|',
    '    |',
    ' ___|',
];
const LCD_DIGITS_WIDTH_3_HEIGHT_2 = [
    ZERO_WIDTH_3_HEIGHT_2,
    ONE_WIDTH_3_HEIGHT_2,
    TWO_WIDTH_3_HEIGHT_2,
    THREE_WIDTH_3_HEIGHT_2,
    FOUR_WIDTH_3_HEIGHT_2,
    FIVE_WIDTH_3_HEIGHT_2,
    SIX_WIDTH_3_HEIGHT_2,
    SEVEN_WIDTH_3_HEIGHT_2,
    EIGHT_WIDTH_3_HEIGHT_2,
    NINE_WIDTH_3_HEIGHT_2,
];

function lcdDigits(number, scale) {
    const decimalDigits = String(number).split('').map(Number);
    return decimalDigits.map(decimalDigit => scaledLcdDigit(decimalDigit, scale));
}

function scaledLcdDigit(digit, {width, height}) {
    let digits = LCD_DIGITS;
    if (width === 3 && height === 2) {
        digits = LCD_DIGITS_WIDTH_3_HEIGHT_2;
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