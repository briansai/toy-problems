class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.val && this.left) {
      this.left.insert(value);
    } else if (value < this.val) {
      this.left = new TreeNode(value);
    }

    if (value > this.val && this.right) {
      this.right.insert(value);
    } else if (value > this.val) {
      this.right = new TreeNode(value);
    }
  }

  contains(value) {
    if (this.val === value) {
      return this;
    }

    if (value < this.val && this.left) {
      return this.left.contains(value);
    } else if (value > this.val && this.right) {
      return this.right.contains(value);
    } else {
      return null;
    }
  }
}

module.exports = TreeNode;
