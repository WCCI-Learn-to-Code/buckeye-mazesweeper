const calculator = require('./calc');

var underTest;

beforeEach(() => {
  underTest = calculator();
});

test('indicate 0 on init', () => {
		expectDisplayToRead("0");
	});
	describe('indicate the numeral pressed when', () => {
	  	test('a single numeral is pressed', () => {
	  		underTest.press(5);
	  		expectDisplayToRead("5");
	  	});
	  	test('multiple numerals are pressed', () => {
	  		underTest.press(4);
	  		underTest.press(2);
	  		expectDisplayToRead("42");
	  	});
	});

function expectDisplayToRead(expected) {
	expect(underTest.display()).toBe(expected);
}
