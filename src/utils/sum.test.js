import {sum, mult} from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Multiplies 4 * 5 to equal 20', () => {
  expect(mult(4, 5)).toBe(20);
});
