'use strict'

function fizzBuzzTree(tree) {
    if(!tree.root) return null
    let fizzBuzz = (node) => {
        if (node.val % 15 === 0) {
            node.val = 'FizzBuzz'
          } else if (node.val % 5 === 0) {
            node.val = 'Buzz'
          } else if (node.val % 3 === 0) {
            node.val = 'Fizz'
          } else {
            node.val = node.val.toString()
          }
    }
    let postTraverse = (node) => {
        if(!node) return
        postTraverse(node.left);
        postTraverse(node.right);
        fizzBuzz(node);
    }
    postTraverse(tree.root)
    return tree
}

module.exports = fizzBuzzTree