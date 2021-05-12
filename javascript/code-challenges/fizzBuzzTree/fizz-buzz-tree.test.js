"use strict";

const BST = require("../../tree/binarySearchTree");
const fizzBuzz = require("./fizz-buzz-tree");
describe("FIZZBUZZ TREE", () => {
  it("should return null when calling an empty tree", () => {
    let tree = new BST();
    expect(fizzBuzz(tree)).toEqual(null);
  });

  it("should change values divisible by 15 as fizzbuzz, 5 as buzz, 3 as fizz and the others as a string", () => {
    let tree = new BST();
    tree.add(5);
    tree.add(3);
    tree.add(15);
    tree.add(4);
    let x = fizzBuzz(tree)
    expect(x.root.val).toEqual('Buzz')
    expect(x.root.left.val).toEqual('Fizz')
    expect(x.root.left.right.val).toEqual('4')
    expect(x.root.right.val).toEqual('FizzBuzz')
  });
});
