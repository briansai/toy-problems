const insertionSort = (nums) => {
  for (let x = 0; x < nums.length; x++) {
    const num = nums[x];
    let prev = x - 1;

    while (prev > -1 && nums[prev] > num) {
      nums[prev + 1] = nums[prev];
      prev--;
      console.log(nums);
    }

    nums[prev + 1] = num;
  }
};

insertionSort([1, 4, -2, 30, 64, 20, 35, 87, 65]);
