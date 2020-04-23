const {convertToLcd} = require('./convert-to-lcd');

describe("Convert to LCD", () => {
    describe("Single digits", () => {
        const LCD_ZERO = '' +
            ' _ \n' +
            '| |\n' +
            '|_|\n';
        const LCD_ONE = '' +
            '   \n' +
            '  |\n' +
            '  |\n';
        const LCD_TWO = '' +
            ' _ \n' +
            ' _|\n' +
            '|_ \n';
        const LCD_THREE = '' +
            ' _ \n' +
            ' _|\n' +
            ' _|\n';
        const LCD_FOUR = '' +
            '   \n' +
            '|_|\n' +
            '  |\n';
        const LCD_FIVE = '' +
            ' _ \n' +
            '|_ \n' +
            ' _|\n';
        const LCD_SIX = '' +
            ' _ \n' +
            '|_ \n' +
            '|_|\n';
        const LCD_SEVEN = '' +
            ' _ \n' +
            '  |\n' +
            '  |\n';
        const LCD_EIGHT = '' +
            ' _ \n' +
            '|_|\n' +
            '|_|\n';
        const LCD_NINE = '' +
            ' _ \n' +
            '|_|\n' +
            ' _|\n';
        const SINGLE_DIGIT = [
            [0, LCD_ZERO],
            [1, LCD_ONE],
            [2, LCD_TWO],
            [3, LCD_THREE],
            [4, LCD_FOUR],
            [5, LCD_FIVE],
            [6, LCD_SIX],
            [7, LCD_SEVEN],
            [8, LCD_EIGHT],
            [9, LCD_NINE],
        ];
        test.each(SINGLE_DIGIT)('example: %i',
            (number, expectedOutput) => {
                expect((convertToLcd(number)))
                    .toBe(expectedOutput)
            });
    });

    describe("Several digits", () => {
        const LCD_10 = '' +
            '    _ \n' +
            '  || |\n' +
            '  ||_|\n';
        const LCD_42 = '' +
            '    _ \n' +
            '|_| _|\n' +
            '  ||_ \n';
        const LCD_84 = '' +
            ' _    \n' +
            '|_||_|\n' +
            '|_|  |\n';
        const LCD_128 = '' +
            '    _  _ \n' +
            '  | _||_|\n' +
            '  ||_ |_|\n';
        const LCD_234 = '' +
            ' _  _    \n' +
            ' _| _||_|\n' +
            '|_  _|  |\n';
        const LCD_2340 = '' +
            ' _  _     _ \n' +
            ' _| _||_|| |\n' +
            '|_  _|  ||_|\n';
        const LCD_5678 = '' +
            ' _  _  _  _ \n' +
            '|_ |_   ||_|\n' +
            ' _||_|  ||_|\n';
        const LCD_1234567890 = '' +
            '    _  _     _  _  _  _  _  _ \n' +
            '  | _| _||_||_ |_   ||_||_|| |\n' +
            '  ||_  _|  | _||_|  ||_| _||_|\n';
        const SEVERAL_DIGITS = [
            [10, LCD_10],
            [42, LCD_42],
            [84, LCD_84],
            [128, LCD_128],
            [234, LCD_234],
            [2340, LCD_2340],
            [5678, LCD_5678],
            [1234567890, LCD_1234567890],
        ];
        test.each(SEVERAL_DIGITS)('example: %i',
            (number, expectedOutput) => {
                expect((convertToLcd(number)))
                    .toBe(expectedOutput)
            });
    });

    describe("Changing the height and width of the digits", () => {
        const LCD_128_WIDTH_3_HEIGHT_2 = '' +
            '      ___  ___ \n' +
            '    |    ||   |\n' +
            '    | ___||___|\n' +
            '    ||    |   |\n' +
            '    ||___ |___|\n';
        const LCD_281_WIDTH_3_HEIGHT_2 = '' +
            ' ___  ___      \n' +
            '    ||   |    |\n' +
            ' ___||___|    |\n' +
            '|    |   |    |\n' +
            '|___ |___|    |\n';
        const LCD_1234567890_WIDTH_3_HEIGHT_2 = '' +
            '      ___  ___       ___  ___  ___  ___  ___  ___ \n' +
            '    |    |    ||   ||    |        ||   ||   ||   |\n' +
            '    | ___| ___||___||___ |___     ||___||___||   |\n' +
            '    ||        |    |    ||   |    ||   |    ||   |\n' +
            '    ||___  ___|    | ___||___|    ||___| ___||___|\n';
        const CHANGING_THE_SCALE = [
            [128, {width: 3, height: 2}, LCD_128_WIDTH_3_HEIGHT_2],
            [281, {width: 3, height: 2}, LCD_281_WIDTH_3_HEIGHT_2],
            [1234567890, {width: 3, height: 2}, LCD_1234567890_WIDTH_3_HEIGHT_2],
        ];
        test.each(CHANGING_THE_SCALE)('example: %i (%s)',
            (number, scale, expectedOutput) => {
                expect(convertToLcd(number, scale)).toBe(expectedOutput)
            });
    });
});
