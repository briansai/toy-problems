class StackPlates {
  constructor(capacity) {
    this.stacks = [];
    this.capacity = capacity;
  }

  push(num) {
    const lastStack = this.stacks[this.stacks.length - 1];
    if (!lastStack || lastStack.length === this.capacity) {
      this.stacks.push([num]);
    } else {
      lastStack.push(num);
    }
    return;
  }

  pop() {
    const lastStack = this.stacks[this.stacks.length - 1];
    const popped = lastStack.pop();
    if (lastStack < 1) {
      this.stacks.pop();
    }
    return popped;
  }
}

module.exports = StackPlates;
