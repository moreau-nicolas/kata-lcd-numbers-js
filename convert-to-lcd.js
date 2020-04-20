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
    const EMPTY = ' ';
    const [
        [TOP_LEFT, TOP, TOP_RIGHT],
        [CENTER_LEFT, CENTER, CENTER_RIGHT],
        [BOTTOM_LEFT, BOTTOM, BOTTOM_RIGHT],
    ] = LCD_DIGITS[decimalDigit];
    return [
        TOP_LEFT + TOP.repeat(width) + TOP_RIGHT,
        ...copy(height - 1,
            CENTER_LEFT + EMPTY.repeat(width) + CENTER_RIGHT,
        ),
        CENTER_LEFT + CENTER.repeat(width) + CENTER_RIGHT,
        ...copy(height - 1,
            BOTTOM_LEFT + EMPTY.repeat(width) + BOTTOM_RIGHT,
        ),
        BOTTOM_LEFT + BOTTOM.repeat(width) + BOTTOM_RIGHT,
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
