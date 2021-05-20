class StackPlates {
  constructor(capacity) {
    this.stacks = [];
    this.capacity = capacity;
    this.currentIndex = null;
  }

  push(num) {
    const lastStack = this.stacks[this.stacks.length - 1];
    if (!lastStack || lastStack.length === this.capacity) {
      this.stacks.push([num]);
    } else if (this.currentIndex) {
      this.stacks[this.currentIndex].push(num);
      this.currentIndex = null;
    } else {
      lastStack.push(num);
    }
    return;
  }

  pop() {
    const lastStack = this.stacks[this.currentIndex || this.stacks.length - 1];
    const popped = lastStack.pop();
    if (lastStack.length < 1) {
      this.stacks.pop();
    }
    return popped;
  }

  popAt(index) {
    if (index < this.stacks.length) {
      this.currentIndex = index;
      return this.pop();
    } else {
      throw new Error('Given index exceeds stack length.');
    }
  }
}

module.exports = StackPlates;
