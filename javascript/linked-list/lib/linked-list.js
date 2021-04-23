'use strict'

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

  toString() {
    let result = "";
    if (this.head === null) {
      return "NULL";
    } else {
      let cur = this.head;
      while (cur !== null) {
        result = result.concat("{",cur.val,"}", " -> ");
        cur = cur.next;
      }
    }
    return result.concat("NULL");
  }
}

module.exports = LinkedList;