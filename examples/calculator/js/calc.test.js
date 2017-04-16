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

	describe('addition', () => {
		test('8 + 3 = 11', () => {
			testOperation(8, "+", 3, 11);
		});
		test('9 + 3 = 12', () => {
			testOperation(9, "+", 3, 12);
		});
		test('8 + 3 = 12', () => {
			testOperation(8, "+", 4, 12);
		});
	});
	describe('subtraction', () => {
		test('9 - 4 = 5', () => {
			testOperation(9, "-", 4, 5);
		});
		test('4 - 9 = -5', () => {
			testOperation(4, "-", 9, -5);
		});
	});
	test('multiplication', () => {
		testOperation(8, "*", 3, 24);
	});
	test('division', () => {
		testOperation(12, "/", 3, 4);
	});

	function testOperation(lval, operator, rval, expected) {

		[].concat(lval, operator, rval, "=").forEach((key) => underTest.press(key));

		expectDisplayToRead("" + expected);
	};
});

function expectDisplayToRead(expected) {
	expect(underTest.display()).toBe(expected);
}
