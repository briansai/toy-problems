const swap = (i, j, array) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const bubbleSort = (nums) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;

    for (let x = 0; x < nums.length - 1; x++) {
      if (nums[x] > nums[x + 1]) {
        sorted = false;
        swap(x, x + 1, nums);
        console.log(nums);
      }
    }
  }

  return nums;
};
bubbleSort([1, 4, -2, 30, 64, 20, 35, 87, 65]);
module.exports = bubbleSort;
