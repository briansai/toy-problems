const sortStack = require('./index');

test('Sorts stack of non empty array', () => {
  const sorted = sortStack([34, 3, 31, 98, 92, 23]);
  expect(sorted).toEqual([3, 23, 31, 34, 92, 98]);
});

test('Returns an empty array when passed an empty number list as parameter', () => {
  const sorted = sortStack([]);
  expect(sorted).toEqual([]);
  expect(sorted.length).toEqual(0);
});
