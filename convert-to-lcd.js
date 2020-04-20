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

function copy(count, element) {
    return Array(count).fill(element);
}

const ZERO_WIDTH_3_HEIGHT_2 = [
    ZERO[0][0] + ZERO[0][1].repeat(3) + ZERO[0][2],
    ...copy(1,
        ZERO[1][0] + ' '.repeat(3) + ZERO[1][2],
    ),
    ZERO[1][0] + ZERO[1][1].repeat(3) + ZERO[1][2],
    ...copy(1,
        ZERO[2][0] + ' '.repeat(3) + ZERO[2][2],
    ),
    ZERO[2][0] + ZERO[2][1].repeat(3) + ZERO[2][2],
];
const ONE_WIDTH_3_HEIGHT_2 = [
    ONE[0][0] + ONE[0][1].repeat(3) + ONE[0][2],
    ...copy(1,
        ONE[1][0] + ' '.repeat(3) + ONE[1][2],
    ),
    ONE[1][0] + ONE[1][1].repeat(3) + ONE[1][2],
    ...copy(1,
        ONE[2][0] + ' '.repeat(3) + ONE[2][2],
    ),
    ONE[2][0] + ONE[2][1].repeat(3) + ONE[2][2],
];
const TWO_WIDTH_3_HEIGHT_2 = [
    TWO[0][0] + TWO[0][1].repeat(3) + TWO[0][2],
    ...copy(1,
        TWO[1][0] + ' '.repeat(3) + TWO[1][2],
    ),
    TWO[1][0] + TWO[1][1].repeat(3) + TWO[1][2],
    ...copy(1,
        TWO[2][0] + ' '.repeat(3) + TWO[2][2],
    ),
    TWO[2][0] + TWO[2][1].repeat(3) + TWO[2][2],
];
const THREE_WIDTH_3_HEIGHT_2 = [
    THREE[0][0] + THREE[0][1].repeat(3) + THREE[0][2],
    ...copy(1,
        THREE[1][0] + ' '.repeat(3) + THREE[1][2],
    ),
    THREE[1][0] + THREE[1][1].repeat(3) + THREE[1][2],
    ...copy(1,
        THREE[2][0] + ' '.repeat(3) + THREE[2][2],
    ),
    THREE[2][0] + THREE[2][1].repeat(3) + THREE[2][2],
];
const FOUR_WIDTH_3_HEIGHT_2 = [
    FOUR[0][0] + FOUR[0][1].repeat(3) + FOUR[0][2],
    ...copy(1,
        FOUR[1][0] + ' '.repeat(3) + FOUR[1][2],
    ),
    FOUR[1][0] + FOUR[1][1].repeat(3) + FOUR[1][2],
    ...copy(1,
        FOUR[2][0] + ' '.repeat(3) + FOUR[2][2],
    ),
    FOUR[2][0] + FOUR[2][1].repeat(3) + FOUR[2][2],
];
const FIVE_WIDTH_3_HEIGHT_2 = [
    FIVE[0][0] + FIVE[0][1].repeat(3) + FIVE[0][2],
    ...copy(1,
        FIVE[1][0] + ' '.repeat(3) + FIVE[1][2],
    ),
    FIVE[1][0] + FIVE[1][1].repeat(3) + FIVE[1][2],
    ...copy(1,
        FIVE[2][0] + ' '.repeat(3) + FIVE[2][2],
    ),
    FIVE[2][0] + FIVE[2][1].repeat(3) + FIVE[2][2],
];
const SIX_WIDTH_3_HEIGHT_2 = [
    SIX[0][0] + SIX[0][1].repeat(3) + SIX[0][2],
    ...copy(1,
        SIX[1][0] + ' '.repeat(3) + SIX[1][2],
    ),
    SIX[1][0] + SIX[1][1].repeat(3) + SIX[1][2],
    ...copy(1,
        SIX[2][0] + ' '.repeat(3) + SIX[2][2],
    ),
    SIX[2][0] + SIX[2][1].repeat(3) + SIX[2][2],
];
const SEVEN_WIDTH_3_HEIGHT_2 = [
    SEVEN[0][0] + SEVEN[0][1].repeat(3) + SEVEN[0][2],
    ...copy(1,
        SEVEN[1][0] + ' '.repeat(3) + SEVEN[1][2],
    ),
    SEVEN[1][0] + SEVEN[1][1].repeat(3) + SEVEN[1][2],
    ...copy(1,
        SEVEN[2][0] + ' '.repeat(3) + SEVEN[2][2],
    ),
    SEVEN[2][0] + SEVEN[2][1].repeat(3) + SEVEN[2][2],
];
const EIGHT_WIDTH_3_HEIGHT_2 = [
    EIGHT[0][0] + EIGHT[0][1].repeat(3) + EIGHT[0][2],
    ...copy(1,
        EIGHT[1][0] + ' '.repeat(3) + EIGHT[1][2],
    ),
    EIGHT[1][0] + EIGHT[1][1].repeat(3) + EIGHT[1][2],
    ...copy(1,
        EIGHT[2][0] + ' '.repeat(3) + EIGHT[2][2],
    ),
    EIGHT[2][0] + EIGHT[2][1].repeat(3) + EIGHT[2][2],
];
const NINE_WIDTH_3_HEIGHT_2 = [
    NINE[0][0] + NINE[0][1].repeat(3) + NINE[0][2],
    ...copy(1,
        NINE[1][0] + ' '.repeat(3) + NINE[1][2],
    ),
    NINE[1][0] + NINE[1][1].repeat(3) + NINE[1][2],
    ...copy(1,
        NINE[2][0] + ' '.repeat(3) + NINE[2][2],
    ),
    NINE[2][0] + NINE[2][1].repeat(3) + NINE[2][2],
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

const ZERO_WIDTH_4_HEIGHT_3 = [
    ZERO[0][0] + ZERO[0][1].repeat(4) + ZERO[0][2],
    ...copy(2,
        ZERO[1][0] + ' '.repeat(4) + ZERO[1][2],
    ),
    ZERO[1][0] + ZERO[1][1].repeat(4) + ZERO[1][2],
    ...copy(2,
        ZERO[2][0] + ' '.repeat(4) + ZERO[2][2],
    ),
    ZERO[2][0] + ZERO[2][1].repeat(4) + ZERO[2][2],
];
const ONE_WIDTH_4_HEIGHT_3 = [
    ONE[0][0] + ONE[0][1].repeat(4) + ONE[0][2],
    ...copy(2,
        ONE[1][0] + ' '.repeat(4) + ONE[1][2],
    ),
    ONE[1][0] + ONE[1][1].repeat(4) + ONE[1][2],
    ...copy(2,
        ONE[2][0] + ' '.repeat(4) + ONE[2][2],
    ),
    ONE[2][0] + ONE[2][1].repeat(4) + ONE[2][2],
];
const TWO_WIDTH_4_HEIGHT_3 = [
    TWO[0][0] + TWO[0][1].repeat(4) + TWO[0][2],
    ...copy(2,
        TWO[1][0] + ' '.repeat(4) + TWO[1][2],
    ),
    TWO[1][0] + TWO[1][1].repeat(4) + TWO[1][2],
    ...copy(2,
        TWO[2][0] + ' '.repeat(4) + TWO[2][2],
    ),
    TWO[2][0] + TWO[2][1].repeat(4) + TWO[2][2],
];
const THREE_WIDTH_4_HEIGHT_3 = [
    THREE[0][0] + THREE[0][1].repeat(4) + THREE[0][2],
    ...copy(2,
        THREE[1][0] + ' '.repeat(4) + THREE[1][2],
    ),
    THREE[1][0] + THREE[1][1].repeat(4) + THREE[1][2],
    ...copy(2,
        THREE[2][0] + ' '.repeat(4) + THREE[2][2],
    ),
    THREE[2][0] + THREE[2][1].repeat(4) + THREE[2][2],
];
const FOUR_WIDTH_4_HEIGHT_3 = [
    FOUR[0][0] + FOUR[0][1].repeat(4) + FOUR[0][2],
    ...copy(2,
        FOUR[1][0] + ' '.repeat(4) + FOUR[1][2],
    ),
    FOUR[1][0] + FOUR[1][1].repeat(4) + FOUR[1][2],
    ...copy(2,
        FOUR[2][0] + ' '.repeat(4) + FOUR[2][2],
    ),
    FOUR[2][0] + FOUR[2][1].repeat(4) + FOUR[2][2],
];
const FIVE_WIDTH_4_HEIGHT_3 = [
    FIVE[0][0] + FIVE[0][1].repeat(4) + FIVE[0][2],
    ...copy(2,
        FIVE[1][0] + ' '.repeat(4) + FIVE[1][2],
    ),
    FIVE[1][0] + FIVE[1][1].repeat(4) + FIVE[1][2],
    ...copy(2,
        FIVE[2][0] + ' '.repeat(4) + FIVE[2][2],
    ),
    FIVE[2][0] + FIVE[2][1].repeat(4) + FIVE[2][2],
];
const SIX_WIDTH_4_HEIGHT_3 = [
    SIX[0][0] + SIX[0][1].repeat(4) + SIX[0][2],
    ...copy(2,
        SIX[1][0] + ' '.repeat(4) + SIX[1][2],
    ),
    SIX[1][0] + SIX[1][1].repeat(4) + SIX[1][2],
    ...copy(2,
        SIX[2][0] + ' '.repeat(4) + SIX[2][2],
    ),
    SIX[2][0] + SIX[2][1].repeat(4) + SIX[2][2],
];
const SEVEN_WIDTH_4_HEIGHT_3 = [
    SEVEN[0][0] + SEVEN[0][1].repeat(4) + SEVEN[0][2],
    ...copy(2,
        SEVEN[1][0] + ' '.repeat(4) + SEVEN[1][2],
    ),
    SEVEN[1][0] + SEVEN[1][1].repeat(4) + SEVEN[1][2],
    ...copy(2,
        SEVEN[2][0] + ' '.repeat(4) + SEVEN[2][2],
    ),
    SEVEN[2][0] + SEVEN[2][1].repeat(4) + SEVEN[2][2],
];
const EIGHT_WIDTH_4_HEIGHT_3 = [
    EIGHT[0][0] + EIGHT[0][1].repeat(4) + EIGHT[0][2],
    ...copy(2,
        EIGHT[1][0] + ' '.repeat(4) + EIGHT[1][2],
    ),
    EIGHT[1][0] + EIGHT[1][1].repeat(4) + EIGHT[1][2],
    ...copy(2,
        EIGHT[2][0] + ' '.repeat(4) + EIGHT[2][2],
    ),
    EIGHT[2][0] + EIGHT[2][1].repeat(4) + EIGHT[2][2],
];
const NINE_WIDTH_4_HEIGHT_3 = [
    NINE[0][0] + NINE[0][1].repeat(4) + NINE[0][2],
    ...copy(2,
        NINE[1][0] + ' '.repeat(4) + NINE[1][2],
    ),
    NINE[1][0] + NINE[1][1].repeat(4) + NINE[1][2],
    ...copy(2,
        NINE[2][0] + ' '.repeat(4) + NINE[2][2],
    ),
    NINE[2][0] + NINE[2][1].repeat(4) + NINE[2][2],
];
const LCD_DIGITS_WIDTH_4_HEIGHT_3 = [
    ZERO_WIDTH_4_HEIGHT_3,
    ONE_WIDTH_4_HEIGHT_3,
    TWO_WIDTH_4_HEIGHT_3,
    THREE_WIDTH_4_HEIGHT_3,
    FOUR_WIDTH_4_HEIGHT_3,
    FIVE_WIDTH_4_HEIGHT_3,
    SIX_WIDTH_4_HEIGHT_3,
    SEVEN_WIDTH_4_HEIGHT_3,
    EIGHT_WIDTH_4_HEIGHT_3,
    NINE_WIDTH_4_HEIGHT_3,
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
