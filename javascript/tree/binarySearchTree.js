"use strict";

const Node = require("./node.js");

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  add(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  contains(val) {
    if (this.root === null) return false;

    let _find = (cur, val) => {
      if (cur.val === val) return true;
      if (cur.val < val) {
        if (cur.left === null) return false;
        return _find(cur.left, val);
      } else {
        if (cur.right === null) return false;
        return _find(cur.right, val);
      }
    };
    return _find(this.root, val);
  }

  preOrderTraverse() {
    let result = [];
    let _walk = (node) => {
      result.push(node.val);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return result;
  }

  inOrderTraverse() {
    let result = [];
    let _walk = (node) => {
      if (node.left) _walk(node.left);
      result.push(node.val);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return result;
  }

  postOrderTraverse() {
    let result = [];
    let _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      result.push(node.val);
    };
    _walk(this.root);
    return result;
  }

  findMaxValue() {
    let list = this.postOrderTraverse();
    let max = -(2 ** 31);
    for (let i = 0; i < list.length; i++) {
      max = max < list[i] ? list[i] : max;
    }
    return max;
  }

  breadthFirst() {
    if (this.root === null) return [];

    const queue = [this.root];
    const result = [];
    while (queue.length !== 0) {
      let queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
        let node = queue.shift();
        result.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    return result;
  }
}

module.exports = BinarySearchTree;
