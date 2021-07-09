const averageLevel = require('./index');
const TreeNode = require('../treeNode/index');

test('TreeNode is a class', () => {
  expect(typeof averageLevel.prototype.constructor).toEqual('function');
});

test('can add node to a Tree', () => {
  const result = new TreeNode(43);
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const answer = {
    val: 43,
    left: { val: 23, left: null, right: null },
    right: {
      val: 69,
      left: null,
      right: { val: 1009, left: null, right: null },
    },
  };
  result.insert(69);
  result.insert(23);
  result.insert(1009);
  expect(result).toEqual(answer);
});

test('can add node to a Tree', () => {
  const tree = new TreeNode(43);
  tree.insert(69);
  tree.insert(23);
  tree.insert(1009);
  const result1 = tree.contains(69) ? true : false;
  console.log(result1);
  expect(result1).toEqual(true);

  const result2 = tree.contains(42) ? true : false;
  expect(result2).toEqual(false);
});
