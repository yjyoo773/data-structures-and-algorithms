"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
  }

  add(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  getList() {
    if (!this.head) return "empty list";
    let cur = this.head;
    while (cur) {
      console.log(cur.val);
      cur = cur.next;
    }
  }
}

class HashMap {
  constructor(size) {
    this.storage = new Array(size);
    this.size = size;
  }

  hash(key) {
    return (
      (key.split("").reduce((acc, cur) => {
        return acc + cur.charCodeAt(0);
      }, 0) *
        19) %
      this.size
    );
  }

  set(key, val) {
    let hash = this.hash(key);
    if (!this.storage[hash]) {
      let ll = new LL();
      ll.add([key, val]);
      this.storage[hash] = ll;
    } else {
      this.storage[hash].add([key, val]);
    }
  }

  contains(key) {
    let hash = this.hash(key);
    if(!this.storage[hash]) return false
    return this.storage[hash].head.val[0] === key
  }

  get(key) {
    if (!this.contains(key)) return;
    let hash = this.hash(key);
    let cur = this.storage[hash].head
    // return cur
    while (cur) {
      if (cur.val[0] === key) {
        return cur
      }
      if (!cur.next) break;
      cur = cur.next;
    }
  }
}

module.exports = {HashMap, LL};
