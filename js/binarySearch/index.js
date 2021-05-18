const binarySearch = (numbers, target) => {
  let start = 0;
  let end = numbers.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (numbers[mid] === target) return true;
    else if (numbers[mid] < target) start = mid + 1;
    else end = mid - 1;
  }

  return false;
};

module.exports = binarySearch;
