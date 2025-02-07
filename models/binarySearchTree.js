const TreeNode = require('./treeNode');

class BinarySearchTree {
  constructor() {
    this.root = null; // Root of the tree
  }

  // Insert a new value into the tree
  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  // Find a value in the tree
  find(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  // In-order traversal (Left, Root, Right)
  inOrderTraversal(node = this.root, result = []) {
    if (!node) return result;

    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    this.inOrderTraversal(node.right, result);

    return result;
  }

  // Pre-order traversal (Root, Left, Right)
  preOrderTraversal(node = this.root, result = []) {
    if (!node) return result;

    result.push(node.value);
    this.preOrderTraversal(node.left, result);
    this.preOrderTraversal(node.right, result);

    return result;
  }

  // Post-order traversal (Left, Right, Root)
  postOrderTraversal(node = this.root, result = []) {
    if (!node) return result;

    this.postOrderTraversal(node.left, result);
    this.postOrderTraversal(node.right, result);
    result.push(node.value);

    return result;
  }

  // Find the minimum value in the tree
  findMin(node = this.root) {
    if (!node) return null;

    let currentNode = node;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  // Find the maximum value in the tree
  findMax(node = this.root) {
    if (!node) return null;

    let currentNode = node;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }
}

module.exports = BinarySearchTree;
