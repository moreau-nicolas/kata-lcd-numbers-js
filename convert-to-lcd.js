function convertToLcd(number, scale = {width: 1, height: 1}) {
    const decimalDigits = String(number).split('').map(Number);
    const lcdDigits = decimalDigits.map(lcdDigit(scale));
    return lcdNumber(lcdDigits);
}

const lcdDigit = ({width, height}) => (decimalDigit) => {
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
};

const LCD_DIGITS = transpose([
    [' _ ', '   ', ' _ ', ' _ ', '   ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ '],
    ['| |', '  |', ' _|', ' _|', '|_|', '|_ ', '|_ ', '  |', '|_|', '|_|'],
    ['|_|', '  |', '|_ ', ' _|', '  |', ' _|', '|_|', '  |', '|_|', ' _|'],
]);

function lcdNumber(lcdDigits) {
    const concatenate = (lines, digit) => lines.map((line, index) => line + digit[index]);
    return lcdDigits.reduce(concatenate).join('\n') + '\n';
}

module.exports = {
    convertToLcd,
}

function copy(count, element) {
    return Array(count).fill(element);
}

function transpose(matrix) {
    return matrix[0].map((_, column) => matrix.map(row => row[column]));
}
