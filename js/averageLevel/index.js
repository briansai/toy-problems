const averageLevel = (root) => {
  const queue = [root];
  const averages = [];

  while (queue.length) {
    let sum = 0;
    const queueLength = queue.length;

    for (let x = 0; x < queue.length; x++) {
      const node = queue.shift();
      sum += node.val;

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    averages.push(sum / queueLength);
  }

  return averages;
};
