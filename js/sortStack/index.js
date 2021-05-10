// Given a stack of integers, sort it in descending order using another temporary stack

const sortStack = (numbers) => {
  let tmpStack = [];

  while (numbers.length) {
    const current = numbers.pop();
    const tmpStackLast = tmpStack[tmpStack.length - 1];

    while (tmpStack.length && tmpStackLast > current) {
      numbers.push(tmpStack.pop());
    }

    tmpStack.push(current);
  }

  return tmpStack;
};

module.exports = sortStack;
