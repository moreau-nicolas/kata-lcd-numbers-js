function convertToLcd(number) {
    const digits = lcdDigits(number);
    return joinDigitLines(digits);
}

const ZERO = [
    ' _ ',
    '| |',
    '|_|'];
const ONE = [
    '   ',
    '  |',
    '  |'];
const TWO = [
    ' _ ',
    ' _|',
    '|_ '];
const THREE = [
    ' _ ',
    ' _|',
    ' _|'];
const FOUR = [
    '   ',
    '|_|',
    '  |'];
const FIVE = [
    ' _ ',
    '|_ ',
    ' _|'];
const SIX = [
    ' _ ',
    '|_ ',
    '|_|'];
const SEVEN = [
    ' _ ',
    '  |',
    '  |'];
const EIGHT = [
    ' _ ',
    '|_|',
    '|_|'];
const NINE = [
    ' _ ',
    '|_|',
    ' _|'];
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

function lcdDigits(number) {
    const decimalDigits = String(number).split('').map(Number);
    return decimalDigits.map(decimalDigit => LCD_DIGITS[decimalDigit]);
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
