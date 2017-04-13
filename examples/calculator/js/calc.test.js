const calculator = require('./calc');

var underTest;

beforeEach(() => {
  underTest = calculator();
});

describe('display should', () => {
	test('indicate 0 on init', () => {
  		expect(underTest.display()).toBe("0");
  	});
});