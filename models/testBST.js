const BinarySearchTree = require('./binarySearchTree');

// Create a new binary search tree
const bst = new BinarySearchTree();

// Insert values into the tree
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

// Print the tree using in-order traversal
console.log('In-order Traversal:', bst.inOrderTraversal()); // [3, 5, 7, 10, 12, 15, 18]

// Print the tree using pre-order traversal
console.log('Pre-order Traversal:', bst.preOrderTraversal()); // [10, 5, 3, 7, 15, 12, 18]

// Print the tree using post-order traversal
console.log('Post-order Traversal:', bst.postOrderTraversal()); // [3, 7, 5, 12, 18, 15, 10]

// Find a value in the tree
console.log('Find 7:', bst.find(7)); // true
console.log('Find 20:', bst.find(20)); // false

// Find the minimum and maximum values
console.log('Minimum Value:', bst.findMin()); // 3
console.log('Maximum Value:', bst.findMax()); // 18
