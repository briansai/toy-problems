const swap = (i, j, array) => {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
};

const bubbleSort = (numbers) => {
  // // create variable sorted as false
  // // while the variable is false
  // // change variable to true
  // // iterate through numbers
  // // if current number is greater than the nxt number,
  // // swap the current and next number
  // // return numbers
  let len = numbers.length;
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let x = 0; x < len - 1; x++) {
      if (numbers[x] > numbers[x + 1]) {
        sorted = false;
        swap(x, x + 1, numbers);
      }
      console.log(numbers);
    }
    len--;
  }
  console.log(numbers);
  return numbers;
};

bubbleSort([1, 4, -2, 30, 64, 20, 35, 87, 65]);
module.exports = bubbleSort;
