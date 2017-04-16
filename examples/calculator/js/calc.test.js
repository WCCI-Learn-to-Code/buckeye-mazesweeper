const calculator = require('./calc');

var underTest;

beforeEach(() => {
  underTest = calculator();
});

test('indicate 0 on init', () => {
		expectDisplayToRead("0");
	});

describe('indicate the numeral(s) pressed', () => {
	test('when a single numeral is pressed', () => {
		underTest.press(5);
		expectDisplayToRead("5");
	});
	test('when multiple numerals are pressed', () => {
		underTest.press(4);
		underTest.press(2);

		expectDisplayToRead("42");
	});
	test('after an operator has been pressed', () => {
		underTest.press(8);
		underTest.press("+");

		expectDisplayToRead("8");
	});
	test('when a numeral is pressed after an operator', () => {
		underTest.press(8);
		underTest.press("+");
		underTest.press(3);

		expectDisplayToRead("3");
	});
});

describe('show the result of', () => {
	test('addition', () => {
		testOperation(8, "+", 3, 11);
	});
	test('subtraction', () => {
		testOperation(9, "-", 4, 5);
	});

	function testOperation(lval, operator, rval, expected) {
		underTest.press(lval);
		underTest.press(operator);
		underTest.press(rval);
		underTest.press("=");

		expectDisplayToRead("" + expected);
	};
});

function expectDisplayToRead(expected) {
	expect(underTest.display()).toBe(expected);
}
