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
