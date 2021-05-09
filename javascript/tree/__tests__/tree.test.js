'use strict'

const BST = require('../binarySearchTree.js')

describe("BST TESTS",()=>{
    it('can successfully instantiate an empty tree',()=>{
        let tree = new BST()
        expect(tree.root).toEqual(null)
    })

    it("can successfully instantiate a tree with a single root node",()=>{
        let tree = new BST()
        tree.add('root')
        expect(tree.root.val).toEqual('root')
    })

    it("can successfully add a left child and right child to a single root node",()=>{
        let tree = new BST()
        tree.add(10)
        tree.add(5)
        tree.add(20)
        expect(tree.root.left.val).toEqual(5)
        expect(tree.root.right.val).toEqual(20)
    })

    it("can successfully return a collection from a preorder traversal",()=>{
        let tree = new BST()
        tree.add(10)
        tree.add(5)
        tree.add(20)
        tree.add(4)
        tree.add(7)
        tree.add(21)
        tree.add(32)
        tree.add(2)
        let expected = [10,5,4,2,7,20,21,32]
        expect(tree.preOrderTraverse()).toEqual(expected)
    })

    it("can successfully return a collection from a inorder traversal",()=>{
        let tree = new BST()
        tree.add(10)
        tree.add(5)
        tree.add(20)
        tree.add(4)
        tree.add(7)
        tree.add(21)
        tree.add(32)
        tree.add(2)
        let expected = [2,4,5,7,10,20,21,32]
        expect(tree.inOrderTraverse()).toEqual(expected)
    })

    it("can successfully return a collection from a postorder traversal",()=>{
        let tree = new BST()
        tree.add(10)
        tree.add(5)
        tree.add(20)
        tree.add(4)
        tree.add(7)
        tree.add(21)
        tree.add(32)
        tree.add(2)
        let expected = [2,4,7,5,32,21,20,10]
        expect(tree.postOrderTraverse()).toEqual(expected)
    })
})