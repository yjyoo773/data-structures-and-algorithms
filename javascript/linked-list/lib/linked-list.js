"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  append(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = newNode;
    }
  }

  includes(val) {
    if (!this.head) {
      return false;
    } else {
      let cur = this.head;
      while (cur) {
        if (cur.val === val) {
          return true;
        } else {
          cur = cur.next;
        }
      }
      return false;
    }
  }

  insertBefore(val, newVal) {
    let newNode = new Node(newVal);
    if (!this.includes(val)) {
      return false;
    } else {
      let cur = this.head;
      while (cur.next.val !== val) {
        cur = cur.next;
      }
      newNode.next = cur.next;
      cur.next = newNode;
    }
  }

  insertAfter(val, newVal) {
    let newNode = new Node(newVal);
    if (!this.includes(val)) {
      return false;
    } else {
      let cur = this.head;
      while (cur.val !== val) {
        cur = cur.next;
      }
      newNode.next = cur.next;
      cur.next = newNode;
    }
  }

  toString() {
    let result = "";
    if (this.head === null) {
      return "NULL";
    } else {
      let cur = this.head;
      while (cur !== null) {
        result = result.concat("{", cur.val, "}", " -> ");
        cur = cur.next;
      }
    }
    return result.concat("NULL");
  }

  kthfromEnd(k){
    if (!this) return false
    if (k<0) return false
    let size = this.toString().split('->').length - 1
    if (size <= k ) return false
    let cur = this.head
    for (let i = 0; i < size - k - 1; i++){
      cur = cur.next
    }
    return cur.val
  }
}

module.exports = LinkedList;
