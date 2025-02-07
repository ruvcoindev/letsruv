// models/TreeNode.js
class TreeNode {
  constructor(value) {
    this.value = value; // The value stored in the node
    this.left = null;   // Left child
    this.right = null;  // Right child
  }
}
//test working class


  // Add a child node
  addChild(childNode) {
    this.children.push(childNode);
  }

  // Remove a child node by value
  removeChild(value) {
    this.children = this.children.filter((child) => child.value !== value);
  }
}

module.exports = TreeNode;
