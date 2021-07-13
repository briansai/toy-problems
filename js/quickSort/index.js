function quickSort(array) {
  if (array.length <= 1) return array;

  const pivot = array[0];
  const left = [];
  const right = [];

  for (const item of array.slice(1)) {
    if (item < pivot) {
      left.push(item);
      console.log('LEFT--->', left);
    } else {
      right.push(item);
      console.log('RIGHT--->', right);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

quickSort([5, 9, 8, 4, 2, 6, 3]);
