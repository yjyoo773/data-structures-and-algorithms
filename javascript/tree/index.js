'use strict'
const BST = require('./binarySearchTree')


let tree = new BST()
tree.add(10)
tree.add(5)
tree.add(20)
tree.add(4)
tree.add(7)
tree.add(21)
tree.add(32)
tree.add(2)
console.log(tree.preOrderTraverse())