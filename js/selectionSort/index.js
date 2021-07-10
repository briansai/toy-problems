const swap = (i, j, array) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;

  return array;
};

const selectionSort = (numbers) => {
  for (let x = 0; x < numbers.length; x++) {
    let min = x;
    for (let y = x + 1; y < numbers.length; y++) {
      if (numbers[y] < numbers[min]) {
        min = y;
      }
    }
    [numbers[x], numbers[min]] = [numbers[min], numbers[x]];
  }
  return numbers;
};

selectionSort([1, 4, -2, 30, 64, 20, 35, 87, 65]);

module.exports = selectionSort;
