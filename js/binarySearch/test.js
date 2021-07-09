const binarySearch = require('./exercise');

test('Search through list of sorted, positive even numbers', () => {
  const target1 = 24;
  const generateNums = () => {
    const nums = [];

    for (let x = 2; x < 1000000; x = x + 2) {
      nums.push(x);
    }

    return nums;
  };
  const foundTarget1 = binarySearch(generateNums(), target1);
  expect(foundTarget1).toEqual(true);

  const target2 = 27789;
  const foundTarget2 = binarySearch(generateNums(), target2);
  expect(foundTarget2).toEqual(false);
});
