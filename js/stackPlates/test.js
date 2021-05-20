const StackPlates = require('./index');

test('Stack is a class', () => {
  expect(typeof StackPlates.prototype.constructor).toEqual('function');
});

test('stack can add items', () => {
  const s = new StackPlates(3);
  const result = [
    [3, 4, 89],
    [48, 45],
  ];
  s.push(3);
  s.push(4);
  s.push(89);
  s.push(48);
  s.push(45);
  expect(s.stacks).toEqual(result);
});

test('stack can remove items', () => {
  const s = new StackPlates(3);
  const result = [[3, 4, 89]];
  s.push(3);
  s.push(4);
  s.push(89);
  s.push(48);
  s.push(45);
  s.pop();
  s.pop();

  expect(s.stacks).toEqual(result);

  s.pop();
  s.pop();
  s.pop();

  expect(s.stacks).toEqual([]);
});

test('stack can remove items at given index and push back into that same stack', () => {
  const s = new StackPlates(2);
  const result1 = [[3, 4], [89], [45]];
  s.push(3);
  s.push(4);
  s.push(89);
  s.push(48);
  s.push(45);
  s.popAt(1);
  expect(s.stacks).toEqual(result1);

  const result2 = [[3, 4], [89, 39], [45]];
  s.push(39);
  expect(s.stacks).toEqual(result2);

  const result3 = [
    [3, 4],
    [89, 39],
    [45, 99],
  ];

  s.push(99);
  expect(s.stacks).toEqual(result3);
});
